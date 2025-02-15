import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { ForgotPasswordFormComponent } from "./components/forgot-password-form/forgot-password-form.component";
import { RecoveryFormComponent } from "./components/recovery-form/recovery-form.component";
import { InputFloatComponent } from "@shared/input-float/input-float.component";

@NgModule({
	imports: [
		CommonModule,
		AuthRoutingModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		InputFloatComponent,
		LoginComponent,
		ForgotPasswordComponent,
		ForgotPasswordFormComponent,
		RecoveryComponent,
		RecoveryFormComponent,
	],
})
export class AuthModule {}
