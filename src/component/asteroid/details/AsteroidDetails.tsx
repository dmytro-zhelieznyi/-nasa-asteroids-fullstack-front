import React, {useEffect, useState} from "react";
import {NeoLookUp} from "../../../interface/NeoLookUp";
import {fetchAsteroid} from "../../../service/AsteroidService";
import Loader from "../../helper/Loader";
import AsteroidDataField from "./AsteroidDataField";
import LinkedField from "./LinkedField";
import OrbitalData from "./OrbitalData";
import EstimatedDiameterData from "./EstimatedDiameterData";
import CloseApproachDatesData from "./CloseApproachDatesData";
import {NearEarthObject} from "../../../interface/NearEarthObject";

interface Props {
    nearEarthObject: NearEarthObject;

    onClose(): void;
}

const AsteroidDetails = (props: Props) => {
    const [neoLookUp, setNeoLookUp] = useState<NeoLookUp | null>(null);
    const [isCloseApproachDatesVisible, setIsCloseApproachDatesVisible] = useState(false);
    const [isEstimatedDiameterVisible, setIsEstimatedDiameterVisible] = useState(false);
    const [isOrbitalDataVisible, setIsOrbitalDataVisible] = useState(false);

    useEffect(() => {
        fetchAsteroid(props.nearEarthObject.id).then(data => {
            console.log(data);
            setNeoLookUp(data);
        })
    }, [props.nearEarthObject.id]);

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
                    <AsteroidDataField
                        name={"Absolute magnitude:"}
                        value={neoLookUp?.near_earth_object.absolute_magnitude_h}/>
                    <AsteroidDataField
                        name={"Designation:"}
                        value={neoLookUp?.near_earth_object.designation}/>
                    <LinkedField
                        text={"Close approach dates"}
                        onClick={() => setIsCloseApproachDatesVisible(prevState => !prevState)}/>
                    {isCloseApproachDatesVisible &&
                        <CloseApproachDatesData near_earth_object={neoLookUp.near_earth_object}/>}
                    <LinkedField
                        text={"Estimated diameter"}
                        onClick={() => setIsEstimatedDiameterVisible(prevState => !prevState)}/>
                    {isEstimatedDiameterVisible &&
                        <EstimatedDiameterData near_earth_object={neoLookUp.near_earth_object}/>}
                    <AsteroidDataField
                        name={"Orbital period:"}
                        value={neoLookUp?.near_earth_object.orbital_data.orbital_period}/>
                    <AsteroidDataField
                        name={"Is sentry object:"}
                        value={neoLookUp.near_earth_object.is_sentry_object ? "Yes" : "No"}/>
                    <LinkedField
                        text={"Orbital data"}
                        onClick={() => setIsOrbitalDataVisible(prevState => !prevState)}/>
                    {isOrbitalDataVisible &&
                        <OrbitalData near_earth_object={neoLookUp.near_earth_object}/>}
                </div>
            </div>
        </>}
    </>);
}

export default AsteroidDetails;
