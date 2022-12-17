import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{

    constructor(
        readonly recipent: string,
        private detail: string,
        public amount: number
    ){}

    format(){
        return `${this.recipent} is owed $ ${this.amount} and he is working at ${this.detail} ( payment )`
    }
}
