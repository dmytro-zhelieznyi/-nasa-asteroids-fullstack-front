import 'jquery/dist/jquery';
import 'moment/moment';
import AsteroidList from "./asteroid/list/AsteroidList";
import "./Main.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {useState} from "react";
import {Dates} from "../interface/Dates";
import moment from "moment";

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
        <div className={"d-flex justify-content-start bg-body sticky-top"}>
            {isDatePickerVisible && <DateRangePicker onApply={dateRangePickerHandler}>
                <i className={"bi-calendar2-date date-picker"} role={"button"} style={{fontSize: "3rem"}}/>
            </DateRangePicker>}
        </div>
        <AsteroidList
            dates={dates}
            onDatePickerVisibilityChange={() => setIsDatePickerVisible(prevState => !prevState)}
        />
    </>);
}

export default Main;
