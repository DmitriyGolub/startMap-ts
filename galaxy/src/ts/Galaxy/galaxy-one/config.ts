import {DevModelName} from "../../asset-list/models";
import {Vector3} from "three";
import {ISmallGalaxy} from "./interface";

export const smallGalaxys: ISmallGalaxy[] = [
    {
        mtlFile: DevModelName.MTL_MINIGALAXY020,
        objFile: DevModelName.OBJ_MINIGALAXY,
        position: new Vector3(200.0, 0.0, -1000.0),
        scale: new Vector3(2000.0, 2000.0, 2000.0),
        defaultRotation: new Vector3(55, 45, 0),
        rotationPower: 0.2
    },
    {
        mtlFile: DevModelName.MTL_MINIGALAXY520,
        objFile: DevModelName.OBJ_MINIGALAXY,
        position: new Vector3(700, 250, -800.0),
        scale: new Vector3(2000.0, 2000.0, 2000.0),
        defaultRotation: new Vector3(65, 0, 25),
        rotationPower: 0.2
    },
    {
        mtlFile: DevModelName.MTL_MINIGALAXY020,
        objFile: DevModelName.OBJ_MINIGALAXY,
        position: new Vector3(1300, 400, 100.0),
        scale: new Vector3(2000.0, 2000.0, 2000.0),
        defaultRotation: new Vector3(20, 0, 55),
        rotationPower: 0.2
    },
    {
        mtlFile: DevModelName.MTL_MINIGALAXY320,
        objFile: DevModelName.OBJ_MINIGALAXY,
        position: new Vector3(1300.0, -500, 0.0),
        scale: new Vector3(2000.0, 2000.0, 2000.0),
        defaultRotation: new Vector3(45, 90, 0),
        rotationPower: 0.3
    },
    {
        mtlFile: DevModelName.MTL_MINIGALAXY620,
        objFile: DevModelName.OBJ_MINIGALAXY,
        position: new Vector3(-0.0, 0.0, 1100.0),
        scale: new Vector3(2000.0, 2000.0, 2000.0),
        defaultRotation: new Vector3(-95, 45, 9),
        rotationPower: 0.2
    },
    {
        mtlFile: DevModelName.MTL_MINIGALAXY420,
        objFile: DevModelName.OBJ_MINIGALAXY,
        position: new Vector3(-1300.0, 150.0, -0.0),
        scale: new Vector3(2000.0, 2000.0, 2000.0),
        defaultRotation: new Vector3(90, 90, 0),
        rotationPower: 0.1
    }
];