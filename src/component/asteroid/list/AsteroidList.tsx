import AsteroidListItem from "../item/AsteroidListItem";
import React, {useEffect, useState} from "react";
import {fetchAsteroids} from "../../../service/AsteroidService";
import {NeoFeed} from "../../../interface/NeoFeed";
import {NearEarthObject} from "../../../interface/NearEarthObject";
import AsteroidDetails from "../details/AsteroidDetails";
import Loader from "../../helper/Loader";
import {Dates} from "../../../interface/Dates";

interface Props {
    dates: Dates;

    onDatePickerVisibilityChange(): void;
}

const AsteroidList = (props: Props) => {
    const [isListVisible, setIsListVisible] = useState<Boolean>(false);
    const [isListLoading, setIsListLoading] = useState<Boolean>(true);
    const [neoFeed, setNeoFeed] = useState<NeoFeed | null>(null);
    const [nearEarthObject, setNearEarthObject] = useState<NearEarthObject | null>(null);

    const listVisibilityHandler = () => {
        setIsListVisible((prevState) => !prevState);
        props.onDatePickerVisibilityChange();
    }

    const asteroidIdHandler = (nearEarthObject: NearEarthObject | null) => {
        setNearEarthObject(nearEarthObject);
    }

    useEffect(() => {
        setIsListVisible(false);
        setIsListLoading(true);
        fetchAsteroids(props.dates).then(data => {
            console.log(data);
            setNeoFeed(data);
            setIsListLoading(false);
            setIsListVisible(true);
        });
    }, [props.dates]);

    return (<>
        {isListLoading && <Loader/>}
        {isListVisible &&
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-2">
                {Object.values(neoFeed?.near_earth_objects ?? {}).flat()
                    .sort((a, b) => {
                        return parseFloat(a.close_approach_data[0].miss_distance.kilometers) -
                            parseFloat(b.close_approach_data[0].miss_distance.kilometers)
                    }).map((nearEarthObject, index) => {
                        return (
                            <AsteroidListItem
                                key={index}
                                nearEarthObject={nearEarthObject}
                                onClick={() => {
                                    listVisibilityHandler();
                                    asteroidIdHandler(nearEarthObject);
                                }}
                            />
                        )
                    })
                }
            </div>}

        {nearEarthObject &&
            <AsteroidDetails
                nearEarthObject={nearEarthObject}
                onClose={() => {
                    asteroidIdHandler(null);
                    listVisibilityHandler();
                }}
            />}
    </>)
}

export default AsteroidList;
