import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';

import { PaymentsService } from './payments-list/payments.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
