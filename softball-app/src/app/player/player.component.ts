import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../common/player';
import { Stats } from '../common/stats';
import { ModalConfig } from '../common/modalConfig';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  currentPlayer: Player;
  currentStats: Stats;

  modalConfig: ModalConfig;

  constructor(private aPlayerServiceService: PlayerServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(+params['id']);

      this.currentPlayer = this.aPlayerServiceService.find(+params['id']);

      if (this.currentPlayer !== undefined) {
        this.currentStats = this.currentPlayer.stats;
        console.log(this.currentPlayer);
      }
   });
  }
  addClick() {
    this.modalConfig = new ModalConfig();

    this.modalConfig.setCurrentPlayer(this.currentPlayer);
    this.modalConfig.setVisibile(true);

    console.log(this.modalConfig);
  }

  updateVisible(event) {
    console.log(event);
    this.modalConfig.setVisibile(event);
  }
}
