const OrbitalDataField = (props: any) => {
    return (
        <div className={"card-text d-flex gap-2 mb-1"}>
            <strong>{`${props.name}: `}</strong>
            <p className={"mb-0"}>{props.value}</p>
        </div>
    )
}

export default OrbitalDataField;
