import {useEffect, useState} from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import AsteroidDetails from "./AsteroidDetails";
import 'jquery/dist/jquery';
import 'moment/moment';
import moment from "moment";
import {NeoFeed} from "../interface/NeoFeed";
import {NearEarthObject} from "../interface/NearEarthObject";
import {fetchAsteroids} from "../service/AsteroidService";
import {Dates} from "../interface/Dates";
import AsteroidCard from "./AsteroidCard";
import BiCalendar2DateIcon from "./icon/BiCalendar2DateIcon";


const AsteroidList = () => {
    const [neoFeed, setNeoFeed] = useState<NeoFeed | null>(null);
    const [isListVisible, setIsListVisible] = useState<Boolean>(false);
    const [isListLoading, setIsListLoading] = useState<Boolean>(true);
    const [nearEarthObject, setNearEarthObject] = useState<NearEarthObject | null>(null);
    const [dates, setDates] = useState<Dates>({
        startDate: "", endDate: "",
    })

    const listVisibilityHandler = () => {
        setIsListVisible((prevState) => !prevState);
    }

    const asteroidIdHandler = (nearEarthObject: NearEarthObject | null) => {
        setNearEarthObject(nearEarthObject);
    }

    const dateRangePickerHandler = (event: any, picker: any) => {
        const startDate = moment(picker.startDate).format('YYYY-MM-DD');
        const endDate = moment(picker.endDate).format('YYYY-MM-DD');
        setDates({
            startDate,
            endDate,
        });
    }

    useEffect(() => {
        setIsListVisible(false);
        setIsListLoading(true);
        fetchAsteroids(dates).then(data => {
            console.log(data);
            setNeoFeed(data);
            setIsListLoading(false);
            setIsListVisible(true);
        });
    }, [dates]);

    return (<>
        {isListLoading && <div>Loading...</div>}

        {isListVisible && <>
            <DateRangePicker
                onApply={dateRangePickerHandler}
            >
                <i className="btn btn-outline-dark p-0 bi bi-calendar2-date">
                    <BiCalendar2DateIcon/>
                </i>
            </DateRangePicker>

            {Object.values(neoFeed?.near_earth_objects ?? {}).flat()
                .sort((a, b) => {
                    return parseFloat(a.close_approach_data[0].miss_distance.kilometers) -
                        parseFloat(b.close_approach_data[0].miss_distance.kilometers)
                })
                .map((nearEarthObject, index) => {
                    return (
                        <AsteroidCard
                            index={index}
                            nearEarthObject={nearEarthObject}
                            isHazardous={nearEarthObject.is_potentially_hazardous_asteroid}
                            onClick={() => {
                                listVisibilityHandler();
                                asteroidIdHandler(nearEarthObject);
                            }}
                        />
                    )
                })
            }
        </>
        }

        {!isListVisible && nearEarthObject &&
            <AsteroidDetails
                asteroid={nearEarthObject}
                onClose={() => {
                    asteroidIdHandler(null);
                    listVisibilityHandler();
                }}
            />
        }
    </>);
}

export default AsteroidList;
