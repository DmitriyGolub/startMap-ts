import {GameUpdateService, Updatable} from "../../../services/update-service";
import {Group} from "three";
import {IAppConfig} from "../../../app";

export class GalaxyOne extends Group implements Updatable {
    public smallGalaxysObjectsArray = [] as any[];

    constructor(private config: IAppConfig, private gameUpdateService: GameUpdateService) {
        super()
        gameUpdateService.register(this)
    }

    update(clock?: number) {
    }
}