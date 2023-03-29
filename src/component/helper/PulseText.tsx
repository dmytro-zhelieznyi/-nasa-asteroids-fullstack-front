import {useState} from "react";
import "./PulseText.css";

const PulseText = (props: any) => {
    const [isPuling, setIsPulsing] = useState(true);

    return (
        <strong
            className={`${isPuling ? "text-pulse" : ""}`}
            onClick={() => {
                setIsPulsing(prevState => !prevState)
            }}
        >
            {props.text}
        </strong>
    )
}

export default PulseText;
