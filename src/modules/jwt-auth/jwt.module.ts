
import { AuthGuard } from './_guards';
import { LoginFormComponent} from './_components/';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './_services'

@NgModule({
  declarations: [    
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
      LoginFormComponent
  ],
  providers: [
    AuthGuard, AuthenticationService
  ]
})
export class JWTModule { }
