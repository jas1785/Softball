import { Injectable } from '@angular/core';
import { Player } from '../common/player';
import { PlayerServiceService } from './player-service.service';

@Injectable()
export class StatLeaderServiceService {

  static readonly START_FILTER_AMOUNT = 0;
  static readonly END_FILTER_AMOUNT = 4;
  constructor(private playerService: PlayerServiceService) { }

  generateLeadersList(trendingType: string) {
/*     const players = this.playerService.get();
    console.log(players);
    console.log('request ' + trendingType);
    if (trendingType === 'AVERAGE') {
      return players.sort(function(a, b) {
                    // tslint:disable-next-line:max-line-length
                    return b.stats.getAverage() - a.stats.getAverage(); })
                                  .splice(StatLeaderServiceService.START_FILTER_AMOUNT, StatLeaderServiceService.END_FILTER_AMOUNT);
    } else if (trendingType === 'HOME_RUN') {
      return players.sort(function(a, b) {
        return b.stats.getHomeRuns() - a.stats.getHomeRuns(); })
        .splice(StatLeaderServiceService.START_FILTER_AMOUNT, StatLeaderServiceService.END_FILTER_AMOUNT);

    } else if (trendingType === 'RBI') {
      console.log('rbi');
      console.log(players);
      return players.sort(function(a, b) {
        return b.stats.getRBI() - a.stats.getRBI(); })
        .splice(StatLeaderServiceService.START_FILTER_AMOUNT, StatLeaderServiceService.END_FILTER_AMOUNT);

    } else if (trendingType === 'HITS') {
      return players.sort(function(a, b) {
        return b.stats.getHits() - a.stats.getHits(); })
        .splice(StatLeaderServiceService.START_FILTER_AMOUNT, StatLeaderServiceService.END_FILTER_AMOUNT);

    } */
  }
}
