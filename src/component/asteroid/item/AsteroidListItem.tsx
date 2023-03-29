import "./AsteroidListItem.css";

const AsteroidListItem = (props: any) => {
    const isHazardousStyle: string = props.nearEarthObject.is_potentially_hazardous_asteroid ?
        "bi-emoji-angry text-danger" : "bi-emoji-smile text-success";
    const missDistance: string = props.nearEarthObject.close_approach_data[0].miss_distance.kilometers;

    return (
        <div className={"d-flex gap-3 col justify-content-start asteroid-list-item rounded rounded-3 my-2"}
             role={"button"}
             onClick={props.onClick}
        >
            <i className={`bi bi-emoji-angry ${isHazardousStyle}`} style={{fontSize: "2rem",}}/>
            {/*<div className={"d-flex gap-2  justify-content-between"} style={{minWidth: 400}}>*/}
            <div className={"d-flex gap-2 justify-content-between"}>
                <div>
                    <h6 className={"mb-0"}>{props.nearEarthObject.name}</h6>
                    <p className={"mb-0 opacity-75"}>{`Miss distance (km): ${parseFloat(missDistance).toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default AsteroidListItem;
