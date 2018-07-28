import { Stats } from './stats';

export class Player {
    _id: string;
    firstName: string;
    lastName: string;
    number: number;
    objectIdHexString: string;

    stats: Stats;

    games: Stats[];

    constructor() {
    }

    displayName() {
        return this.firstName + ' ' + this.lastName;
    }
     setFirstName(firstName) {
        this.firstName = firstName;
    }

     setLastName(lastName) {
        this.lastName = lastName;
    }

     setNumber(number) {
        this.number = number;
    }
    setStats(stats) {
        this.stats = stats;
    }
}
