import PulseText from "../../helper/PulseText";
import React from "react";

interface Props {
    text: string

    onClick(): any;
}

const LinkedField = (props: Props) => {
    return (
        <div className="card-text mb-1"
             role={"button"}
             onClick={props.onClick}>
            <PulseText text={props.text}/>
        </div>
    )
}

export default LinkedField;
