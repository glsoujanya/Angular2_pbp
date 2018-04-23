import {Component, OnInit} from '@angular/core';
import {CustomerService} from './customer.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector : 'customers',
    templateUrl : './customers.component.html',
    providers : [CustomerService]
})

export class CustomersComponent implements  OnInit{

customers : Promise<any[]>;

    constructor(private _customerservice : CustomerService){}

    ngOnInit() {
        this.customers = this._customerservice.getCustomerList().catch((err) => {

         console.log(err); return Observable.of(err) })
        //console.log(JSON.stringify(this.customers) + ' inside customers component')
    }
}

