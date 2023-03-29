import {useState} from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'jquery/dist/jquery';
import 'moment/moment';
import moment from "moment";
import {Dates} from "../interface/Dates";
import AsteroidList from "./AsteroidList";
import "./Main.css";

const Main = () => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState<Boolean>(true);
    const [dates, setDates] = useState<Dates>({
        startDate: "", endDate: "",
    })

    const dateRangePickerHandler = (event: any, picker: any) => {
        const startDate = moment(picker.startDate).format('YYYY-MM-DD');
        const endDate = moment(picker.endDate).format('YYYY-MM-DD');
        setDates({
            startDate,
            endDate,
        });
    }

    return (<>
        {isDatePickerVisible &&
            <div className={"navbar navbar-dark bg-body justify-content-center sticky-top"}>
                <DateRangePicker
                    onApply={dateRangePickerHandler}
                >
                    {/*<button className={"btn btn-outline-primary py-0"} style={{fontSize: "1rem"}}>*/}
                    <i className={"bi-calendar2-date date-picker"} role={"button"} style={{fontSize: "3rem"}}/>
                    {/*date*/}
                    {/*</button>*/}
                </DateRangePicker>
            </div>}
        <AsteroidList
            dates={dates}
            onDatePickerVisibilityChange={() => setIsDatePickerVisible(prevState => !prevState)}
        />
    </>);
}

export default Main;
