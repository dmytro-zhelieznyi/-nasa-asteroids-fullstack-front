import {CloseApproachData} from "./CloseApproachData";
import {EstimatedDiameter} from "./EstimatedDiameter";
import {OrbitalData} from "./OrbitalData";

export interface NearEarthObject {
    links: {
        self: string;
    },
    id: string;
    neo_reference_id: string;
    name: string;
    "designation": string,
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimatedDiameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproachData[];
    orbital_data: OrbitalData;
    is_sentry_object: boolean;
}
