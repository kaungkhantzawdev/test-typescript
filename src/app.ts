import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

//Dom
const aTag = document.querySelector('a')!;
 
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const List = new ListTemplate(ul)

form.addEventListener('submit',(e: Event) => {
    e.preventDefault();
    let doc : HasFormatter;

    let values : [ string, string, number ];
    values = [ toFrom.value, details.value, amount.valueAsNumber ]
    if(type.value === 'invoice'){
        doc = new Invoice( ...values )
    }else{
        doc = new Payment( ...values )
    }

    List.render(doc, type.value, 'end');

    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
    console.log(doc)
})
