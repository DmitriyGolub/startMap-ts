import {DevModelName} from "../../asset-list/models";
import {Vector3} from "three";

export interface ISmallGalaxy {
    mtlFile: string,
    objFile: string;
    position: Vector3;
    scale: Vector3
    defaultRotation: Vector3
    rotationPower: number
}