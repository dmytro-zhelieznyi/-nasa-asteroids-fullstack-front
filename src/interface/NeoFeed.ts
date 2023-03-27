import {Links} from "./Links";
import {NearEarthObjects} from "./NearEarthObjects";

export interface NeoFeed {
    links: Links;
    element_count: number;
    near_earth_objects: NearEarthObjects;
}
