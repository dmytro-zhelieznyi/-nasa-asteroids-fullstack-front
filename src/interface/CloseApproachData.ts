import {RelativeVelocity} from "./RelativeVelocity";
import {MissDistance} from "./MissDistance";

export interface CloseApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: RelativeVelocity;
    miss_distance: MissDistance;
    orbiting_body: string;
}
