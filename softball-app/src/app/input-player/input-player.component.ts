import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { Player } from '../common/player';
import { ListPlayerConfig } from '../common/listPlayerConfig';
import { Observable } from 'rxjs/Observable';
import { ListPlayersComponent } from '../list-players/list-players.component';

@Component({
  selector: 'app-input-player',
  templateUrl: './input-player.component.html',
  styleUrls: ['./input-player.component.css']
})
export class InputPlayerComponent implements OnInit, OnDestroy {


  firstName: string;
  lastName: string;
  number: number;

  players: Player[];

  playerObservable: Observable<Player[]>;
  constructor(private playerService: PlayerServiceService) {
  }

  ngOnInit() {
    // this.playerService.get().subscribe((data) => this.players = data);
    this.playerObservable = this.playerService.get();
    this.playerObservable.subscribe((data) => this.players = data);
    console.log('input player player config');
  }

  onSubmit() {
    const newPlayer = new Player();
    newPlayer.firstName = this.firstName.trim();
    newPlayer.lastName = this.lastName.trim();
    newPlayer.number = this.number;

   this.playerService.add(newPlayer).subscribe(
      (res) => {
        if (res != null) {
          this.players.push(res as Player); // console.log(err);
        } else {
        console.log('error');
        }
      });
      this.clearTextBox();
    }

  clearTextBox() {
    this.firstName = '';
    this.lastName = '';
    this.number = undefined;
  }

  ngOnDestroy() {
    // this.playerObservable.cancel();
  }
}
