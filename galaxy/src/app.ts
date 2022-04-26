import './styles/main.css'
import "regenerator-runtime/runtime";
import {PerspectiveCamera, Scene, WebGLRenderer, WebGLRenderTarget} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {getCanvas} from "./ts/helpers/get-canvas";
import {GalaxyApp} from "./ts/Galaxy/galaxy-app";
import {cameraConst} from "./ts/const/camera-consts";

export interface IAppConfig {
    renderer: WebGLRenderer,
    target?: WebGLRenderTarget
    control: OrbitControls,
    camera: PerspectiveCamera,
    scene: Scene,
    option?: {},
}

export let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


const camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.5, 1000000
)

export class App {
    private scene = new Scene()
    private target = new WebGLRenderTarget(sizes.width, sizes.height)
    private renderer = new WebGLRenderer({
        canvas: getCanvas(),
        antialias: true,
        stencil: true
    })


    private control = new OrbitControls(camera, this.renderer.domElement)

    private config: IAppConfig = {
        renderer: this.renderer,
        control: this.control,
        //target: this.target,
        camera: camera,
        scene: this.scene,
    }

    constructor() {
        setTimeout(() => window.scrollTo(0, 1), 10) //scroll fix
        //configure pre
        this.cameraConfigure()
        this.controlConfigure()
        this.initGame()
    }

    resizer() {
        this.renderer.setPixelRatio(2)
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.setClearColor(0x000000);
        this.renderer.render(this.scene, camera)
        window.addEventListener('resize', () => this.onWindowResize());
    }

    protected cameraConfigure() {
        camera.position.set(-90, 120, 180);
        camera.updateProjectionMatrix()
    }

    protected controlConfigure() {
        const controls = this.control
        controls.enableDamping = true;
        controls.dampingFactor = 0.035;
        controls.enablePan = false;
        controls.minDistance = cameraConst.minDistance;
        controls.maxDistance = cameraConst.minDistance;
        controls.update()
    }

    protected onWindowResize(w?: number, h?: number) {
        sizes.width = window.innerWidth || w as number
        sizes.height = window.innerHeight || h as number
        //update camera
        this.renderer.setPixelRatio(2)
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.render(this.scene, camera);

    }

    private initGame() {
        //assets callback
        //load Galaxy
        new GalaxyApp(this.config as IAppConfig)
        //TODO
        setTimeout(() => this.resizer(), 100)
    }
}

window.onload = () => {
    new App()
}
