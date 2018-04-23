import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector : 'my-customer',   // <my-customer> => HTML usage (directive)
    templateUrl : 'app/customer.component/customer.component.html'
})


export class CustomerListComponent implements OnInit{
 @Input() customer : { id : number, name : string }

    ngOnInit() {}
    constructor() {}

}

