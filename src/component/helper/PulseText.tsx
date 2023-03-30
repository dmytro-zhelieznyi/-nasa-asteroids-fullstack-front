import {useState} from "react";
import "./PulseText.css";

interface Props {
    text: string;
}

const PulseText = (props: Props) => {
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
