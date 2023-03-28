const AsteroidCard = (props: any) => {
    return (
            <div className="card my-2" key={props.index}>
                <div className="card-body">
                    <h3 className={`card-title ${props.nearEarthObject.is_potentially_hazardous_asteroid ? "link-danger" : "link-success"}`}
                        role={"button"}
                        onClick={props.onClick}
                    >
                        {`${props.nearEarthObject.name}`}
                    </h3>
                    <p className="card-text">{`Miss distance
                                            (km): ${props.nearEarthObject.close_approach_data[0].miss_distance.kilometers}`}</p>
                </div>
            </div>
    )
}

export default AsteroidCard;
