export class Payment {
    constructor(recipent, detail, amount) {
        this.recipent = recipent;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} is owed $ ${this.amount} and he is working at ${this.detail} ( payment )`;
    }
}
