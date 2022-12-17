import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{
    // client: string;
    // detail: string;
    // amount: number;

    // constructor( a: string, b:string, c:number){
    //     this.client = a
    //     this.detail = b
    //     this.amount = c
    // }

    //access modifier
    constructor(
        readonly client: string,
        private detail: string,
        public amount: number
    ){}

    format(){
        return `${this.client} is owed $ ${this.amount} and he is working at ${this.detail} ( invoice )`
    }
}
