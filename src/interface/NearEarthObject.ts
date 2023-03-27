import {CloseApproachData} from "./CloseApproachData";
import {EstimatedDiameter} from "./EstimatedDiameter";

export interface NearEarthObject {
    links: {
        self: string;
    },
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimatedDiameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproachData[];
    is_sentry_object: boolean;
}
