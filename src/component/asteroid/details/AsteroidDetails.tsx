import React, {useEffect, useState} from "react";
import {NeoLookUp} from "../../../interface/NeoLookUp";
import {fetchAsteroid} from "../../../service/AsteroidService";
import Loader from "../../helper/Loader";
import OrbitalDataField from "./OrbitalDataField";
import PulseText from "../../helper/PulseText";
import MissDistanceDataField from "./MissDistanceDataField";

const AsteroidDetails = (props: any) => {
    const [neoLookUp, setNeoLookUp] = useState<NeoLookUp | null>(null);
    const [isCloseApproachDatesVisible, setIsCloseApproachDatesVisible] = useState(false);
    const [isEstimatedDiameterVisible, setIsEstimatedDiameterVisible] = useState(false);
    const [isOrbitalDataVisible, setIsOrbitalDataVisible] = useState(false);

    useEffect(() => {
        fetchAsteroid(props.asteroid.id).then(data => {
            console.log(data);
            setNeoLookUp(data);
        })
    }, [props.asteroid.id]);

    return (<>
        {!neoLookUp && <Loader/>}
        {neoLookUp && <>
            <div className={"d-flex mt-4 align-items-center justify-content-between"}>
                <h1 className={`"p-0 m-0" ${neoLookUp.near_earth_object.is_potentially_hazardous_asteroid ? "text-danger" : "text-success"}`}>{`Asteroid: ${neoLookUp?.near_earth_object.name}`}</h1>
                <button className={"btn btn-close"}
                        onClick={props.onClose}
                ></button>
            </div>
            <div className="card my-2">
                <div className="card-body">
                    <div className="card-text d-flex gap-2 mb-1">
                        <strong>{`Absolute magnitude: `}</strong>
                        <p className={"mb-0"}>{neoLookUp?.near_earth_object.absolute_magnitude_h}</p>
                    </div>
                    <div className="card-text d-flex gap-2 mb-1">
                        <strong>{`Designation: `}</strong>
                        <p className={"mb-0"}>{neoLookUp?.near_earth_object.designation}</p>
                    </div>
                    <div className="card-text mb-1"
                         role={"button"}
                         onClick={() => {
                             setIsCloseApproachDatesVisible(prevState => !prevState)
                         }}>
                        <PulseText text={"Close approach dates"}/>
                    </div>
                    {isCloseApproachDatesVisible &&
                        <div
                            className={"mb-3 d-flex flex-wrap row-cols-auto justify-content-center border border-dark border-opacity-25"}>
                            {neoLookUp?.near_earth_object.close_approach_data.map((data, index) => {
                                return <span className={"m-2"} key={index}>
                                        {`${data.close_approach_date}`}
                                    </span>
                            })}
                        </div>}
                    <div className="card-text mb-1"
                         role={"button"}
                         onClick={() => {
                             setIsEstimatedDiameterVisible(prevState => !prevState)
                         }}>
                        <PulseText text={"Estimated diameter"}/>
                    </div>
                    {isEstimatedDiameterVisible &&
                        <div className={"mb-3 border border-dark border-opacity-25"}>
                            <MissDistanceDataField
                                type={"feet"}
                                min={neoLookUp?.near_earth_object.estimated_diameter.feet.estimated_diameter_min}
                                max={neoLookUp?.near_earth_object.estimated_diameter.feet.estimated_diameter_max}/>
                            <MissDistanceDataField
                                type={"kilometers"}
                                min={neoLookUp?.near_earth_object.estimated_diameter.kilometers.estimated_diameter_min}
                                max={neoLookUp?.near_earth_object.estimated_diameter.kilometers.estimated_diameter_max}/>
                            <MissDistanceDataField
                                type={"meters"}
                                min={neoLookUp?.near_earth_object.estimated_diameter.meters.estimated_diameter_min}
                                max={neoLookUp?.near_earth_object.estimated_diameter.meters.estimated_diameter_max}/>
                            <MissDistanceDataField
                                type={"miles"}
                                min={neoLookUp?.near_earth_object.estimated_diameter.miles.estimated_diameter_min}
                                max={neoLookUp?.near_earth_object.estimated_diameter.miles.estimated_diameter_max}/>
                        </div>}
                    <div className="card-text d-flex gap-2 mb-1">
                        <strong>{`Orbital period: `}</strong>
                        <p className={"mb-0"}>{neoLookUp?.near_earth_object.orbital_data.orbital_period}</p>
                    </div>
                    <div className="card-text d-flex gap-2 mb-1">
                        <strong>{`Is sentry object: `}</strong>
                        <p className={"mb-0"}>{`${neoLookUp.near_earth_object.is_sentry_object ? "Yes" : "No"}`}</p>
                    </div>
                    <div className="card-text mb-1"
                         role={"button"}
                         onClick={() => {
                             setIsOrbitalDataVisible(prevState => !prevState)
                         }}>
                        <PulseText text={"Orbital data"}/>
                    </div>
                    {isOrbitalDataVisible &&
                        <div className={"mb-3 p-2 border border-dark border-opacity-25"}>
                            <OrbitalDataField
                                name={"Aphelion distance: "}
                                value={neoLookUp.near_earth_object.orbital_data.orbital_period}/>
                            <OrbitalDataField
                                name={"Ascending node longitude: "}
                                value={neoLookUp.near_earth_object.orbital_data.ascending_node_longitude}/>
                            <OrbitalDataField
                                name={"Data arc in days: "}
                                value={neoLookUp.near_earth_object.orbital_data.data_arc_in_days}/>
                            <OrbitalDataField
                                name={"Eccentricity: "}
                                value={neoLookUp.near_earth_object.orbital_data.eccentricity}/>
                            <OrbitalDataField
                                name={"Epoch Osculation: "}
                                value={neoLookUp.near_earth_object.orbital_data.epoch_osculation}/>
                            <OrbitalDataField
                                name={"Equinox: "}
                                value={neoLookUp.near_earth_object.orbital_data.equinox}/>
                            <OrbitalDataField
                                name={"First observation date: "}
                                value={neoLookUp.near_earth_object.orbital_data.first_observation_date}/>
                            <OrbitalDataField
                                name={"Observations used: "}
                                value={neoLookUp.near_earth_object.orbital_data.observations_used}/>
                        </div>}
                </div>
            </div>
        </>}
    </>);
}

export default AsteroidDetails;
