export class ErrorConfig {

    private message: String;

    constructor(message: String) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }
}

