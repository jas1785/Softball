import { Player } from './player';

export class ModalConfig {

    private currentPlayer: Player;
     visible: Boolean;
    constructor() {
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

    setCurrentPlayer(player) {
        this.currentPlayer = player;
    }

    getPlayer() {
        return this.currentPlayer;
    }
}
