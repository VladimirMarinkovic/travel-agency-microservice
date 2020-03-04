import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        AuthSignupRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule { }
