import React from "react";
import {NeoLookUp} from "../../../interface/NeoLookUp";

const CloseApproachDatesData = (neoLookUp: NeoLookUp) => {
    return (
        <div
            className={"mb-3 d-flex flex-wrap row-cols-auto justify-content-center border border-dark border-opacity-25"}>
            {neoLookUp?.near_earth_object.close_approach_data.map((data, index) => {
                return <span className={"m-2"} key={index}>
                                        {`${data.close_approach_date}`}
                                    </span>
            })}
        </div>
    )
}

export default CloseApproachDatesData;
