import {Injectable} from '@angular/core';
import { Response, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
// import 'rxjs/Rx' - put it in main.ts
// import 'rxjs/add/operator/map'
 

const CUSTOMER_URL = 'app/customer.component/customers.json'

 @Injectable()


 export class CustomerService {

    constructor(private _http : Http){}

    ngOnInit() {}

    getCustomerList()  {
        return this._http.get(CUSTOMER_URL).map((response : Response) => response.json()).toPromise().catch((err : any) =>       {console.log(err); return Promise.reject(err)}) ;
    }

    getCustomerList_Observable()  {
        return this._http.get(CUSTOMER_URL).map((response : Response) => response.json()).catch(this._handleError) ;
    }

    _handleError(err : any) {
        console.log(err);
        return Observable.throw(err);
    }


 }