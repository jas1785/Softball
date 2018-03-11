export class Stats {

    hits: number;
    atBats: number;
    doubles: number;
    triples: number;
    homeRuns: number;
    walks: number;
    strikeOuts: number;
    runs: number;
    rbi: number;

    setRuns(runs) {
        this.runs = runs;
    }

    setRBI(rbi) {
        this.rbi = rbi;
    }

    setHits(hits) {
        this.hits = hits;
    }

    setDoubles(doubles) {
        this.doubles = doubles;
    }

    setTriples(triples) {
        this.triples = triples;
    }

    setHomeRuns(homeruns) {
        this.homeRuns = homeruns;
    }

    setWalks(walks) {
        this.walks = walks;
    }

    setStrikeOuts(stirkeouts) {
        this.strikeOuts = stirkeouts;
    }
    setAtbats(atBats) {
        this.atBats = atBats;
    }
    getHits() {
         return this.checkUndefined(this.hits);
    }

   public getAtBats() {
        return this.checkUndefined(this.atBats);
   }

   getDoubles() {
    return this.checkUndefined(this.doubles);
    }

    getTriples() {
        return this.checkUndefined(this.triples);
    }

    getWalks() {
        return this.checkUndefined(this.walks);
    }

    getHomeRuns() {
        return this.checkUndefined(this.homeRuns);
    }

    getStrikeOut() {
        return this.checkUndefined(this.strikeOuts);
    }

    getRBI() {
        return this.checkUndefined(this.rbi);
    }

    getRuns() {
        return this.checkUndefined(this.runs);
    }

    getAverage() {
        if (this.isUndefined(this.atBats)) {
            return 0;
        } else {
            return this.hits / this.atBats;
        }
    }

    checkUndefined(value) {
        if ( this.isUndefined(value) ) {
            return 0;
        }
        return value;
    }

    isUndefined(value) {
        if (value === undefined) {
            return true;
        }
        return false;
    }
}
