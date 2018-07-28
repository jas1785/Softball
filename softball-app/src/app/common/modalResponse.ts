import { Stats } from './stats';

export class ModalResponse {

    private currentStat: Stats;
    visible: Boolean;
    constructor() {
    }

    setCurrentStat(stat: Stats) {
        this.currentStat = stat;
    }

    getStats() {
        return this.currentStat;
    }
    setVisibile(visible) {
        this.visible = visible;
    }
    isVisible() {
        if (this.visible === undefined || this.visible == null) {
            console.log(this.visible);
            return false;
        }
        return this.visible;
    }
}
