import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { LoginView } from './_views';

import { PaymentsListComponent } from './_components';
import 'hammerjs';

import { PaymentsService, TranslationService, AuthenticationService } from './_services';


@NgModule({
  declarations: [
    AppComponent,
    LoginView,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [PaymentsService, TranslationService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
