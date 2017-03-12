import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';

import { PaymentsService } from './services/payments.service';
import { TranslationService } from './services/translation.service';

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
  providers: [PaymentsService, TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
