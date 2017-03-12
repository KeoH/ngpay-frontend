import { Component, OnInit } from '@angular/core';

import { PaymentsService } from './payments.service';

import { Payment } from '../classes/payments';

@Component({
  selector: 'payments-list',
  templateUrl: './payments-list.component.html'
})
export class PaymentsListComponent implements OnInit{

  payments :Payment[] = [];

  constructor( private _paymentsService :PaymentsService ) { }

  ngOnInit(){
    this._paymentsService.getPayments()
      .subscribe(
        (data :any) => {
          for(let item of data){
            this.payments.push(new Payment(item))
          }
        }
      );
  }

}
