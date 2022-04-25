import {GameUpdateService, Updatable} from "../../../services/update-service";
import {BufferGeometry, Group, Points, ShaderMaterial, Vector3, Vector4} from "three";
import {IAppConfig} from "../../../app";
import {AbstarctGalaxy, IAbstractGalaxy} from "../abstarct-galaxy";
import * as THREE from "three";
import {globalConfig} from "../../configs/galaxy-config";
import {upStarActivity} from "../../helpers/up-star-activity";

export class GalaxyOne extends Group implements Updatable {
    private windowSize = {x: window.innerWidth, y: window.innerHeight}
    private customColorStars = [] as Vector4[]
    //TODO
    public smallGalaxysObjectsArray = [] as any[];
    public firstGalaxyActiveStarsPull = [] as Vector4[]
    private firstStarConfig: IAbstractGalaxy = {
        count: 40,
        xSize: 20,
        zSize: 20,
        armOffsetMax: 0.7,
    }
    private abstractStars = new AbstarctGalaxy(this.firstStarConfig)
    public firstStars = new BufferGeometry()
    private allStars = [] as Vector3[]

    public firstGalaxyMaterial: ShaderMaterial
    public firstGalaxy: Points


    constructor(private config: IAppConfig, private gameUpdateService: GameUpdateService) {
        super()
        gameUpdateService.register(this)
        this.config.scene.add(this)


        this.addUniform()
        this.addColor()
    }

    addColor() {
        for (let customColorStarID = 0; customColorStarID < 2200; customColorStarID++) {
            let star = this.allStars[Math.floor(Math.random() * this.allStars.length)]
            this.customColorStars.push(new THREE.Vector4(star.x, star.y, star.z, Math.random() * 10));
        }
    }

    addUniform() {
        let windowSize = this.windowSize.y
        let galaxyPower = globalConfig.firstGalaxyPower
        let firstGalaxyActiveStarsPull = this.firstGalaxyActiveStarsPull
        let customColorStars = this.customColorStars
        let cameraPower = globalConfig.cameraRotationPower

        this.firstStars.setFromPoints(this.abstractStars.stars)

        const uniforms = {
            size: {type: 'f', value: 2.5},
            distanceSize: {type: 'f', value: 1},
            t: {type: "f", value: 0},
            z: {type: "f", value: 0},
            //@ts-ignore
            pixelRatio: {type: "f", value: windowSize},
            activeStars: {value: firstGalaxyActiveStarsPull},
            starsWithCustomColor: {value: customColorStars},
            cameraRotationPower: {value: cameraPower},
            galaxyPower: {value: galaxyPower},
            derivatives: true
        }


        this.firstGalaxyMaterial = new ShaderMaterial({
            vertexShader: document.getElementById('first_vShader')!.textContent!,
            fragmentShader: document.getElementById('first_fShader')!.textContent!,
            // @ts-ignore
            uniforms: uniforms,
            depthTest: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });


        this.firstGalaxy = new Points(this.firstStars, this.firstGalaxyMaterial)
        this.firstGalaxy.renderOrder = 999;
        this.firstGalaxy.rotation.set(0, Math.PI / 1.5, 0);
        this.firstGalaxy.position.x = 5;
        this.firstGalaxy.position.z = 12;
        this.firstGalaxy.name = 'firstGalaxy'
        this.config.scene.add(this.firstGalaxy)

        for (let i = 0; i < this.firstGalaxy.geometry.getAttribute('position').array.length; i++) {
            const newVec3 = new Vector3(this.firstGalaxy.geometry.getAttribute('position').array[i * 3],
                this.firstGalaxy.geometry.getAttribute('position').array[i * 3 + 1],
                this.firstGalaxy.geometry.getAttribute('position').array[i * 3 + 2])
            this.allStars.push(newVec3)

        }
        for (let starID = 0; starID < 900; starID++) {
            //const star: Vector3 = this.firstGalaxy.geometry.attributes['position'].array[Math.floor(Math.random() * this.firstGalaxy.geometry.attributes['position'].array.length)];
            let star = this.allStars[Math.floor(Math.random() * this.allStars.length)]
            this.firstGalaxyActiveStarsPull.push(new Vector4(star.x, star.y, star.z, 1.0));
            setTimeout(upStarActivity, Math.random() * 3000, starID, star.x, star.y, star.z, this.firstGalaxy);
        }

        setTimeout(() => {
            console.log(this.allStars)
        })

    }

    update(clock?: number) {
    }
}