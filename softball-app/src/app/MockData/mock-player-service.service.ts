import { Injectable,OnInit } from '@angular/core';
import { Player } from '../common/player';
import { Stats } from '../common/stats';

@Injectable()
export class MockPlayerServiceService  {

  players: Array<Player>;

  constructor() {
   }

  get() {

    const player1 = new Player();
    player1.setFirstName('Mckenzi');
    player1.setLastName('Shotsberger');
    player1.setNumber(1);
    player1.id = 1;

    const player1Stats = new Stats();

    player1Stats.setAtbats(3);
    player1Stats.setHits(2);

    player1.setStats(player1Stats);

    const player2 = new Player();
    player2.setFirstName('Charlotte');
    player2.setLastName('Shotsberger');
    player2.setNumber(2);
    player2.id = 2;

    const player2Stats = new Stats();

    player2Stats.setAtbats(4);
    player2Stats.setHits(2);
    player2Stats.setDoubles(1);
    player2Stats.setHomeRuns(1);
    player2Stats.setRBI(2);
    player2.setStats(player2Stats);


    const player3 = new Player();
    player3.setFirstName('Morgan');
    player3.setLastName('Shotsberger');
    player3.setNumber(3);
    player3.id = 3;


    const player3Stats = new Stats();

    player3Stats.setAtbats(5);
    player3Stats.setHits(1);
    player3Stats.setDoubles(1);

    player3.setStats(player3Stats);

    if (this.players === undefined) {
      this.players = [];
    }
    this.players.push(player1);
    this.players.push(player2);
    this.players.push(player3);

    console.log(this.players);
    return this.players;
  }
}
