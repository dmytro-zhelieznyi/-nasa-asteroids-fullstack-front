interface Props {
    type: string;
    min: number;
    max: number;
}

const MissDistanceDataField = (props: Props) => {
    return (
        <div className={"d-flex flex-wrap justify-content-center"}>
            <span className="m-2">{`(${props.type}) MIN: ${props.min}`}</span>
            <span className="m-2">{`MAX: ${props.max}`}</span>
        </div>
    )
}

export default MissDistanceDataField;
