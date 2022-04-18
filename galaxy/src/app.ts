import './styles/main.css'
import "regenerator-runtime/runtime";
import {PerspectiveCamera, Scene, WebGLRenderer, WebGLRenderTarget} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {getCanvas} from "./ts/helpers/get-canvas";
import {GalaxyApp} from "./ts/Galaxy/galaxy-app";
import {cameraConst} from "./ts/const/camera-consts";

export interface IAppConfig {
    renderer: WebGLRenderer,
    target: WebGLRenderTarget
    control: OrbitControls,
    camera: PerspectiveCamera,
    scene: Scene,
    option?: {},
}


const camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.5, 1000000
)

export class App {
    private scene = new Scene()
    private target = new WebGLRenderTarget(innerWidth, innerHeight)
    private renderer = new WebGLRenderer({
        // canvas: getCanvas(),
        antialias: true,
    })


    private control = new OrbitControls(camera, this.renderer.domElement)

    private config: IAppConfig = {
        renderer: this.renderer,
        control: this.control,
        target: this.target,
        camera: camera,
        scene: this.scene,
    }

    constructor() {
        //configure pre
        this.renderConfigure()
        this.cameraConfigure()
        this.controlConfigure()
        this.addEventResize()
        //load Galaxy
        new GalaxyApp(this.config as IAppConfig)

    }

    protected renderConfigure() {
        this.renderer.setSize(innerWidth, innerHeight);
        this.renderer.getContext().getExtension('OES_standard_derivatives');
        this.renderer.setClearColor(0x0000000);
        document.body.appendChild(this.renderer.domElement);
    }

    protected cameraConfigure() {
        camera.position.set(-90, 120, 180);
    }

    protected controlConfigure(){
        const controls = this.control
        controls.enableDamping = true;
        controls.dampingFactor = 0.035;
        controls.enablePan = false;
        controls.minDistance = cameraConst.minDistance;
        controls.maxDistance = cameraConst.minDistance;
    }

    addEventResize(){
        window.addEventListener('resize',  () => {
            camera.aspect = innerWidth / innerHeight;
            this.renderer.setSize(innerWidth, innerHeight);
            camera.updateProjectionMatrix();
            this.renderer.render(this.scene, camera);
        });
    }
}

new App()
