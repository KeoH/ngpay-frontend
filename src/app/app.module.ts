import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginView, PaymentsListView, DashboardView } from './_views';
import { routing } from './routing';
import 'hammerjs';

import { PaymentsService, TranslationService, AuthenticationService } from './_services';
import { AuthGuard } from './_guards';
import { LoginFormComponent, HeaderTopComponent, PaymentsListComponent } from './_components/';


@NgModule({
  declarations: [
    AppComponent,
    
    LoginView,
    DashboardView,
    PaymentsListView,

    PaymentsListComponent,

    LoginFormComponent,

    HeaderTopComponent
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
