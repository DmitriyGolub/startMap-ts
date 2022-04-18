import {Group, SpriteMaterial} from "three";
import {IAppConfig} from "../../../app";
import {textureLoader} from "../loaders/texture-loader";
import {DevTextureName} from "../../asset-list/textures";
import * as THREE from "three";

export class Cloud extends Group {
    private dynamicStars: any
    private cloudMaterial: SpriteMaterial

    private cloudTexture = textureLoader.load(DevTextureName.CLOUD, (texture) => {
        this.cloudMaterial = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            opacity: 0.0,
            depthWrite: false
        });
    })

    constructor(private config: IAppConfig) {
        super();
        super.name = 'cloud'
    }

    addCloud() {
        const dynamicStars = this.dynamicStars
        for (let dynamicStarID = 0; dynamicStarID < 400; dynamicStarID++) {

            const star = dynamicStars[dynamicStarID];

            const cloudMaterial = this.cloudMaterial.clone();
            const cloudMesh = new THREE.Sprite(cloudMaterial);
            cloudMesh.material.rotation = Math.PI * Math.random();
            cloudMesh.renderOrder = 1;
            cloudMesh.scale.set(7, 7, 7);

            const cloud = cloudMesh.clone();
            cloud.position.set(star.x, star.y, star.z - 1);
            this.add(cloud);

            // fouthGalaxyClouds[dynamicStarID] = cloud;
            //
            // fouthGalaxyActiveStarsPull[dynamicStarID] = new THREE.Vector4(star.x, star.y, star.z, 0);
            // fouthgalaxy.geometry.vertices[dynamicStarID] = new THREE.Vector3(star.x, star.y, star.z);
            //
            // setTimeout(startActivity, Math.random() * 30000, dynamicStarID, fouthgalaxy);
        }
    }
}