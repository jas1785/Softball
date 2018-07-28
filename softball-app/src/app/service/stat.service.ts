import { Injectable } from '@angular/core';
import { Stats } from '../common/stats';

@Injectable()
export class StatService {

  constructor() { }

  public statMapper( key, value: number, currentStat: Stats ) {
    let hitCount = 0;
    console.log('Key ' + key);
    console.log(currentStat);
    if (key === 'atBat') {
      let total = this.checkForUndefinedState(currentStat.getAtBats());
      total += +value;
      currentStat.setAtbats(total);
    } else if (key === 'strikeout') {
      let total = this.checkForUndefinedState(currentStat.getStrikeOut());
      total += +value;
      currentStat.setStrikeOuts(total);
    } else if (key === 'rbi') {
      let total = this.checkForUndefinedState(currentStat.getRBI());
      total += +value;
      currentStat.setRBI(total);
    } else if (key === 'runs') {
      let total = this.checkForUndefinedState(currentStat.getRuns());
      total += +value;
      currentStat.setRuns(total);
    } else if (key === 'walk') {
      let total = this.checkForUndefinedState(currentStat.getWalks());
      total += +value;
      currentStat.setWalks(total);
    } else if (key === 'homerun') {
      let total = this.checkForUndefinedState(currentStat.getHomeRuns());
      total += +value;
      hitCount += +value;
      currentStat.setHomeRuns(total);
    } else if (key === 'double') {
      let total = this.checkForUndefinedState(currentStat.getDoubles());
      total += +value;
      hitCount += +value;
      currentStat.setDoubles(total);
    } else if (key === 'triple') {
      let total = this.checkForUndefinedState(currentStat.getTriples());
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
      valid = this.isValidEntry(hitCount, statForm.value.atBat);
    }
   return valid;
  }

  isNull(value) {
    return value === null || value === undefined;
  }

  /**
   * checks if values is undefined.  If value is undefined return 0
   * @param value
   */
  checkForUndefinedState(value) {
    if (value === undefined) {
      return 0;
    }
    return value;
  }

  /**
   *  Valid entry occurs when hits are not greater than at abats
   * @param hits
   * @param atBat
   */
  isValidEntry(hits, atBat) {
    console.log('hits :: ' + +hits);
    console.log('at bats :: ' + +atBat);

    if (+hits > +atBat) {
      return false;
    }
    return true;
  }
}
