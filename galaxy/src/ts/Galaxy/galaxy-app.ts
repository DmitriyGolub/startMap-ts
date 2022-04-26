import {IAppConfig, sizes} from "../../app";
import {GameUpdateService, Updatable} from "../../services/update-service";
import {GalaxyOne} from "./galaxy-one/galaxy-one";
import {GalaxyPlane} from "./enviroments/galaxy-plane";

export class GalaxyApp implements Updatable {
    //three settings
    private camera = this.config.camera
    private renderer = this.config.renderer
    private scene = this.config.scene
    private updateService = new GameUpdateService()
    //galaxy settings
    private galaxyOne = new GalaxyOne(this.config, this.updateService)
    protected galaxyPlane = new GalaxyPlane(this.config)


    constructor(private config: IAppConfig) {
        this.updateService.register(this)
    }


    update(clock?: number) {
        this.config.control.update()
        // @ts-ignore
        // let spDelta = this.config.control['sphericalDelta'] || {};
        this.renderer.autoClear = false;
        this.renderer.render(this.scene, this.camera);
    }
}