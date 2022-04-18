import {Vector3} from "three";

export function getDistanceBetweenTwoVectors(v1: Vector3, v2: Vector3) {
    const dx = v1.x - v2.x;
    const dy = v1.y - v2.y;
    const dz = v1.z - v2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}