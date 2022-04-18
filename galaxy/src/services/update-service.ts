import {Clock} from "three";

export interface Updatable {
    update(clock?: number): void;
}

export class GameUpdateService {
    private objectUpdate = new Set()
    private clock = new Clock()
    private delta = 0
    //fps lock
    private interval = 1 / 30;

    public register(item: Updatable) {
        this.objectUpdate.add(item)
    }

    public unregister(item: Updatable) {
        //this.objectsToUpdate.splice(item.id!, 1)
        this.objectUpdate.delete(item)
    }


    public update() {
        this.delta += this.clock.getDelta()
        if (this.delta > this.interval) {
            this.objectUpdate.forEach(item => {
                (item as Updatable).update(this.delta)
            })
            this.delta = this.delta % this.interval;
        }
    }
}