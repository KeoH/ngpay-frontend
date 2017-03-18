import { Component, OnInit } from '@angular/core';

import { PaymentsService } from '../_services/payments.service';
import { TranslationService } from '../_services/translation.service';

import { Payment } from '../_models';

@Component({
  selector: 'payments-list',
  templateUrl: './payments-list.component.html'
})
export class PaymentsListComponent implements OnInit{

  payments :Payment[] = [];

  config :TranslationService = new TranslationService();

  constructor( 
    private _paymentsService :PaymentsService
  ) { }

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
