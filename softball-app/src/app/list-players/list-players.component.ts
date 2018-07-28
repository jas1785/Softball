import { Component, OnInit, Input } from '@angular/core';
import { PlayerServiceService } from '../service/player-service.service';
import { ListPlayerConfig } from '../common/listPlayerConfig';
import { Player } from '../common/player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  @Input() players;
  // players: Player[];
  constructor(private playerService: PlayerServiceService) { }

  ngOnInit() {
    console.log(this.players);
    /* this.playerService.get()
        .subscribe(
          (response) => {console.log(response); this.players = response; },
          (err: any) => console.log(err),
          () => console.log(this.players)); */
  }
}
