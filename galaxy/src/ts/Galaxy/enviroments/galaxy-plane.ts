import {textureLoader} from "../loaders/texture-loader";
import {DevTextureName} from "../../asset-list/textures";
import * as THREE from "three";
import {Mesh, MeshBasicMaterial, PlaneGeometry, Texture} from "three";
import {IAppConfig} from "../../../app";

export class GalaxyPlane {
    private texture = textureLoader.load(DevTextureName.BC10, (texture) => {
        this.addMesh(texture)
    })
    private galaxyPlane: Mesh

    constructor(private config: IAppConfig) {
    }

    private addMesh(texture: Texture) {
        this.galaxyPlane = new Mesh(
            new PlaneGeometry(350, 350),
            new MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true,
                depthWrite: false,
                opacity: 1.0
            }));
        this.galaxyPlane.rotation.x = -Math.PI / 2;
        this.galaxyPlane.rotation.z = -1.2;
        this.galaxyPlane.position.y = -1;
        this.galaxyPlane.position.z = 9;
        this.config.scene.add(this.galaxyPlane);
    }
}