import { Injectable } from '@angular/core';
import { Stats } from '../common/stats';

@Injectable()
export class StatService {

  constructor() { }

  public statMapper( key, value: number, currentStat: Stats ) {
    let hitCount = 0;
    if (key === 'atBat') {
      let total = currentStat.getAtBats();
      total += +value;
      currentStat.setAtbats(total);
    } else if (key === 'strikeout') {
      let total = currentStat.getStrikeOut();
      total += +value;
      currentStat.setStrikeOuts(total);
    } else if (key === 'rbi') {
      let total = currentStat.getRBI();
      total += +value;
      currentStat.setRBI(total);
    } else if (key === 'runs') {
      let total = currentStat.getRuns();
      total += +value;
      currentStat.setRuns(total);
    } else if (key === 'walks') {
      let total = currentStat.getWalks();
      total += +value;
      currentStat.setWalks(total);
    } else if (key === 'homerun') {
      let total = currentStat.getHomeRuns();
      total += +value;
      hitCount += +value;
      currentStat.setHomeRuns(total);
    } else if (key === 'double') {
      let total = currentStat.getDoubles();
      total += +value;
      hitCount += +value;
      currentStat.setDoubles(total);
    } else if (key === 'triple') {
      let total = currentStat.getTriples();
      total += +value;
      hitCount += value;
      currentStat.setTriples(total);
    } else if (key === 'single') {
      hitCount += +value;
    }

    if (hitCount > 0) {
      let total = currentStat.getHits();
      total += +hitCount;
      currentStat.setHits(total);
    }

    console.log(currentStat);
  }

  validateStats(statForm) {
    let hitCount = 0;
    let strikeOutCount = 0;
    let valid = false;
    if (statForm.value.atBat !== undefined) {
      const inputedAtBats = statForm.value.atBat;

      // get all possible hits
      hitCount += +(this.isNull(statForm.value.double) ? 0 : statForm.value.double);
      hitCount += +(this.isNull(statForm.value.triple) ? 0 : statForm.value.triple);
      hitCount += +(this.isNull(statForm.value.homerun) ? 0 : statForm.value.homerun);
      hitCount += +(this.isNull(statForm.value.single) ? 0 : statForm.value.single);

      strikeOutCount = +(this.isNull(statForm.value.strikeout) ? 0 : statForm.value.strikeout);

      // add strikeouts from at bats
      hitCount = strikeOutCount + hitCount;
      valid = this.isHitsEqualToAtBat(hitCount, statForm.value.atBat);
    }
   return valid;
  }

  isNull(value) {
    return value === null || value === undefined;
  }
  isHitsEqualToAtBat(hits, atBat) {
    return +hits === +atBat;
  }


}
