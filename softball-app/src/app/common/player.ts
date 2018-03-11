import { Stats } from './stats';

export class Player {
    id: number;
    firstName: string;
    lastName: string;
    number: number;

    stats: Stats;

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
