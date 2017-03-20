import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginView, PaymentsListView } from './_views';
import { routing } from './routing';
import { PaymentsListComponent } from './_components';
import 'hammerjs';

import { PaymentsService, TranslationService, AuthenticationService } from './_services';
import { AuthGuard } from './_guards';
import { LoginFormComponent } from './_components/';


@NgModule({
  declarations: [
    AppComponent,
    
    LoginView,
    PaymentsListView,

    PaymentsListComponent,

    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthGuard, 
    PaymentsService, 
    TranslationService, 
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
