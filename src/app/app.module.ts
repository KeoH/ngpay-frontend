import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { LoginView, PaymentsListView, DashboardView } from './_views';
import { routing } from './routing';
import 'hammerjs';

import { PaymentsService, TranslationService, } from './_services';
import { HeaderTopComponent, PaymentsListComponent } from './_components/';
import { JWTModule } from '../modules/jwt-auth/jwt.module';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginView,
    DashboardView,
    PaymentsListView,

    PaymentsListComponent,

    HeaderTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JWTModule,
    routing
  ],
  providers: [ 
    PaymentsService, 
    TranslationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
