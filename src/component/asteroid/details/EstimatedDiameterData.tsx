import MissDistanceDataField from "./MissDistanceDataField";
import React from "react";
import {NeoLookUp} from "../../../interface/NeoLookUp";

const EstimatedDiameterData = (neoLookUp: NeoLookUp) => {
    return (
        <div className={"mb-3 border border-dark border-opacity-25"}>
            <MissDistanceDataField
                type={"feet"}
                min={neoLookUp.near_earth_object.estimated_diameter.feet.estimated_diameter_min}
                max={neoLookUp.near_earth_object.estimated_diameter.feet.estimated_diameter_max}/>
            <MissDistanceDataField
                type={"kilometers"}
                min={neoLookUp.near_earth_object.estimated_diameter.kilometers.estimated_diameter_min}
                max={neoLookUp.near_earth_object.estimated_diameter.kilometers.estimated_diameter_max}/>
            <MissDistanceDataField
                type={"meters"}
                min={neoLookUp.near_earth_object.estimated_diameter.meters.estimated_diameter_min}
                max={neoLookUp.near_earth_object.estimated_diameter.meters.estimated_diameter_max}/>
            <MissDistanceDataField
                type={"miles"}
                min={neoLookUp.near_earth_object.estimated_diameter.miles.estimated_diameter_min}
                max={neoLookUp.near_earth_object.estimated_diameter.miles.estimated_diameter_max}/>
        </div>
    )
}

export default EstimatedDiameterData;
