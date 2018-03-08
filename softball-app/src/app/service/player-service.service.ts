import { Injectable } from '@angular/core';
import { MockPlayerServiceService } from '../MockData/mock-player-service.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerServiceService {

  constructor(private aMockPlayerServiceService: MockPlayerServiceService) { }

  get() {
    return this.aMockPlayerServiceService.get();
  }

  add(player) {
    this.aMockPlayerServiceService.players.push(player);
  }
  find(id) {
    let found;
    this.aMockPlayerServiceService.get().forEach(function(player) {
      if (player.id === id) {
        console.log(player);
        found = player;
       // return found;
      }
    });
    console.log('hi');
    return found;
  }

}
