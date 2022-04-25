import {Vector3, Vector4} from "three";

export class AbstarctGalaxy {
    public stars = [] as Vector3[]
    private numArms = 5
    private armSeparationDistance = 2 * Math.PI / 2
    private rotationFactor = 3.5

    constructor(private galaxyConfig: IAbstractGalaxy) {
        this.init()
    }

    init() {
        const config = this.galaxyConfig
        let randomOffsetXY: number

        if (config.filterType === 4) {
            randomOffsetXY = 0.2;
        } else {
            randomOffsetXY = 0.1;
        }

        for (let i = 0; i < config.count; i++) {
            // Choose a distance from the center of the galaxy.
            let distance = Math.random();
            distance = Math.pow(distance, 2);

            if (config.filterType === 2) {
                while (distance < 0.15 || distance > 0.75) {
                    distance = Math.pow(Math.random(), 2);
                }
            }

            if (config.filterType === 3 || config.filterType == 4) {
                while (distance < 0.4) {
                    distance = Math.pow(Math.random(), 2);
                }
            }

            this.calculating(distance, randomOffsetXY, i)
        }


    }

    private calculating(distance: number, randomOffsetXY: number, i: number) {
        const config = this.galaxyConfig
        let angle = Math.random() * 2 * Math.PI;
        let armOffset = Math.random() * config.armOffsetMax;
        armOffset = armOffset - config.armOffsetMax / 2;
        armOffset = armOffset * (1 / distance);

        let squaredArmOffset = Math.pow(armOffset, 2);
        if (armOffset < 0)
            squaredArmOffset = squaredArmOffset * -1;
        armOffset = squaredArmOffset;

        let rotation = distance * this.rotationFactor;

        angle = (angle / this.armSeparationDistance) * this.armSeparationDistance + armOffset + rotation;

        // Convert polar coordinates to 2D cartesian coordinates.
        let starX = Math.cos(angle) * distance;
        let starY = Math.sin(angle) * distance;

        let randomOffsetX = Math.random() * randomOffsetXY;
        let randomOffsetY = Math.random() * randomOffsetXY;

        starX += randomOffsetX;
        starY += randomOffsetY;

        // Now we can assign xy coords.
        // @ts-ignore
        this.stars[i] = {
            // @ts-ignore
            x: null,
            // @ts-ignore
            y: null,
            // @ts-ignore
            z: null,
            w: 24
        };

        this.stars[i].x = starX * config.xSize;

        if (config.filterType === 4) {
            this.stars[i].y = (Math.random() * 3) - ((Math.random() * 3));
        } else {
            this.stars[i].y = Math.random() * 2;
        }

        this.stars[i].z = starY * config.zSize;
    }

}

export interface IAbstractGalaxy {
    count: number,
    xSize: number,
    zSize: number,
    armOffsetMax: number,
    filterType?: number
}