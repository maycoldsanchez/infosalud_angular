import { Component } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
@Component({
    selector: "app-forgot-password-form",
    templateUrl: "./forgot-password-form.component.html",
    standalone: true,
    imports: [NgIf, ReactiveFormsModule],
})
export class ForgotPasswordFormComponent {
	form = this.formBuilder.nonNullable.group({
		email: ["", [Validators.email, Validators.required]],
	});
	status: string = "init";
	emailSent = false;

	constructor(private formBuilder: FormBuilder) {}

	sendLink() {
		if (this.form.valid) {
			this.status = "loading";
			const { email } = this.form.getRawValue();
		} else {
			this.form.markAllAsTouched();
		}
	}
}
