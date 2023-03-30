import OrbitalDataField from "./OrbitalDataField";
import React from "react";
import {NeoLookUp} from "../../../interface/NeoLookUp";

const OrbitalData = (neoLookUp: NeoLookUp) => {
    return (
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
        </div>
    )
}

export default OrbitalData;
