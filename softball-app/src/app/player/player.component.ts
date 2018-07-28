import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../common/player';
import { Stats } from '../common/stats';
import { ModalConfig } from '../common/modalConfig';
import { ModalResponse } from '../common/modalResponse';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  currentPlayer: Player;
  visible = false;
  currentStats: Stats;
  modalConfig: ModalConfig;

  constructor(private aPlayerServiceService: PlayerServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const playerId = this.route.snapshot.params['id'];
     this.aPlayerServiceService.find(playerId)
            .subscribe( found => {
              console.log('found ' + found);
              this.currentPlayer = found as Player;
              this.visible = true;
              if (this.currentPlayer.stats === undefined) {
                this.currentPlayer.stats = new Stats();
                console.log(this.currentPlayer.stats);
              }
            });
          //  this.currentStats=new Stats();
  }
  addClick() {
    this.modalConfig = new ModalConfig();

    this.modalConfig.setCurrentPlayer(this.currentPlayer);
    this.modalConfig.setVisibile(true);

    console.log(this.modalConfig);
  }

  updateVisible(event: ModalResponse) {
    console.log(event);
    this.modalConfig.setVisibile(event.isVisible());
    this.modalConfig.getPlayer().stats = event.getStats();
    this.currentStats = this.modalConfig.getPlayer().stats;
  }
}
