import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { LoginView, PaymentsListView } from './_views';
import { routing } from './routing';
import { PaymentsListComponent } from './_components';
import 'hammerjs';

import { PaymentsService, TranslationService, AuthenticationService } from './_services';
import { AuthGuard } from './_guards';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginView,
    PaymentsListView,

    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
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
