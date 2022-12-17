export class Invoice {
    // client: string;
    // detail: string;
    // amount: number;
    // constructor( a: string, b:string, c:number){
    //     this.client = a
    //     this.detail = b
    //     this.amount = c
    // }
    //access modifier
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} is owed $ ${this.amount} and he is working at ${this.detail} ( invoice )`;
    }
}
