import {useEffect, useState} from "react";
import {NeoLookUp} from "../interface/NeoLookUp";
import {fetchAsteroid} from "../service/AsteroidService";
import Loader from "./Loader";

const AsteroidDetails = (props: any) => {
    const [neoLookUp, setNeoLookUp] = useState<NeoLookUp | null>(null);
    const [isCloseApproachDatesVisible, setIsCloseApproachDatesVisible] = useState(false);
    const [isEstimatedDiameterVisible, setIsEstimatedDiameterVisible] = useState(false);

    useEffect(() => {
        fetchAsteroid(props.asteroid.id).then(data => {
            console.log(data);
            setNeoLookUp(data);
        })
    }, [props.asteroid.id]);

    return (<>
        {!neoLookUp && <Loader/>}
        {neoLookUp &&
            <>
                <div className={"d-flex mt-4 align-items-center justify-content-between"}>
                    <h1 className={`"p-0 m-0" ${neoLookUp.near_earth_object.is_potentially_hazardous_asteroid ? "text-danger" : "text-success"}`}>{`Asteroid: ${neoLookUp?.near_earth_object.name}`}</h1>
                    <button className={"btn btn-close"}
                            onClick={props.onClose}
                    ></button>
                </div>
                <div className="card my-2">
                    <div className="card-body">
                        <p className="card-text font-size-">
                            <strong>{`Absolute magnitude: ${neoLookUp?.near_earth_object.absolute_magnitude_h}`}</strong>
                        </p>
                        <p className="card-text">
                            <strong>{`Designation: ${neoLookUp?.near_earth_object.designation}`}</strong>
                        </p>
                        <p className="card-text link-primary"
                           role={"button"}
                           onClick={() => {
                               setIsCloseApproachDatesVisible(!isCloseApproachDatesVisible)
                           }}><strong>Close approach dates</strong>
                        </p>
                        {isCloseApproachDatesVisible &&
                            <div
                                className={"mb-3 d-flex flex-wrap row-cols-auto justify-content-center border border-dark border-opacity-25"}>
                                {neoLookUp?.near_earth_object.close_approach_data.map((data, index) => {
                                    return <span className={"m-2"} key={index}>
                                        {`${data.close_approach_date}`}
                                    </span>
                                })}
                            </div>}
                        <p className="card-text link-primary"
                           role={"button"}
                           onClick={() => {
                               setIsEstimatedDiameterVisible(!isEstimatedDiameterVisible)
                           }}><strong>Estimated diameter (km)</strong>
                        </p>
                        {isEstimatedDiameterVisible &&
                            <div
                                className={"mb-3 d-flex flex-wrap row-cols-auto justify-content-center border border-dark border-opacity-25"}>
                                    <span className="m-2">
                                        {`MIN: ${neoLookUp?.near_earth_object.estimated_diameter.kilometers.estimated_diameter_min}`}
                                    </span>
                                <span className="m-2">
                                        {`MAX: ${neoLookUp?.near_earth_object.estimated_diameter.kilometers.estimated_diameter_max}`}
                                    </span>
                            </div>}
                        <p className="card-text">
                            <strong>{`Orbital period: ${neoLookUp?.near_earth_object.orbital_data.orbital_period}`}</strong>
                        </p>
                    </div>
                </div>
            </>}
    </>);
}

export default AsteroidDetails;
