import {Points, ShaderMaterial} from "three";
import * as THREE from "three";

export function upStarActivity(starID: number, starX: number, starY: number, starZ: number, currentGalaxy: Points) {
    let star = (currentGalaxy.material as ShaderMaterial).uniforms.activeStars.value[starID];
    if (star.w < 1.8) {
        (currentGalaxy.material as ShaderMaterial).uniforms!.activeStars.value[starID].w += 0.01;
        setTimeout(upStarActivity, 1, starID, starX, starY, starZ, currentGalaxy);
    } else {
        setTimeout(downStarActivity, 1, starID, starX, starY, starZ, currentGalaxy);
    }
}

export function downStarActivity(starID: number, starX: number, starY: number, starZ: number, currentGalaxy: Points) {
    let star = (currentGalaxy.material as ShaderMaterial).uniforms.activeStars.value[starID];
    let minStarActivity: number
    if (currentGalaxy.name == 'fourthGalaxy') {
         minStarActivity = 0.0;
    } else {
         minStarActivity = 1.0;
    }

    if (star.w > minStarActivity) {
        (currentGalaxy.material as ShaderMaterial).uniforms.activeStars.value[starID].w -= 0.005;
        setTimeout(downStarActivity, 1, starID, starX, starY, starZ, currentGalaxy);
    } else {
        refreshStarsActivity(starID, starX, starY, starZ, currentGalaxy);
    }
}

export function refreshStarsActivity(starID: number, starX: number, starY: number, starZ: number, currentGalaxy: Points) {
    if (currentGalaxy.name == 'fourthGalaxy') {
        // const star = dynamicStars[Math.floor(Math.random() * dynamicStars.length)];
        // currentGalaxy.geometry.vertices[starID].set(star.x, star.y, star.z);
        // currentGalaxy.geometry.verticesNeedUpdate = true;
        // currentGalaxy.material.uniforms.activeStars.value[starID] = new THREE.Vector4(star.x, star.y, star.z, 0.0);
        //setTimeout(upStarActivity, Math.random() * 3000, starID, star.x, star.y, star.z, currentGalaxy);
        return;
    }

    setTimeout(upStarActivity, Math.random() * 3000, starID, starX, starY, starZ, currentGalaxy);
}