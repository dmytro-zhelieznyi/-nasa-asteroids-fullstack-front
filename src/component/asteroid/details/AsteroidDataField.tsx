import React from "react";

interface Props {
    name: string;
    value: any;
}

const AsteroidDataField = (props: Props) => {
    return (
        <div className="card-text d-flex gap-2 mb-1">
            <strong>{props.name}</strong>
            <p className={"mb-0"}>{props.value}</p>
        </div>
    )
}

export default AsteroidDataField;
