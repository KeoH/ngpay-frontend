import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import 'hammerjs';
import { PaymentsService } from './_services';
import { TranslationService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [PaymentsService, TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
