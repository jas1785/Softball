import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { Player } from '../common/player';

@Component({
  selector: 'app-input-player',
  templateUrl: './input-player.component.html',
  styleUrls: ['./input-player.component.css']
})
export class InputPlayerComponent implements OnInit {

  firstName: string;
  lastName: string;
  number: number;

  private playerNames: Player[];

  constructor(private aPlayerServiceService: PlayerServiceService) {
  }

  ngOnInit() {
    this.playerNames = this.aPlayerServiceService.get();
  }

  onSubmit() {

    if (this.playerNames === null || this.playerNames === undefined) {
      this.playerNames = [];
    }
    const newPlayer = new Player();
    newPlayer.firstName = this.firstName.trim();
    newPlayer.lastName = this.lastName.trim();
    newPlayer.number = this.number;
    newPlayer.id = this.aPlayerServiceService.get().length + 1;
    this.aPlayerServiceService.add(newPlayer);
    this.clearTextBox();

  }

  clearTextBox() {
    this.firstName = '';
    this.lastName = '';
    this.number = undefined;
  }
}
