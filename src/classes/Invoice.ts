export class Invoice{
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
        return `${this.client} owe $ ${this.amount} and detail is ${this.detail}`
    }
}
