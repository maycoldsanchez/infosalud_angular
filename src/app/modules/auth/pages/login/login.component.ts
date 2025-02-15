import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { CLASS } from "@utils/class.utils";
import { NgClass } from "@angular/common";
import { InputFloatComponent } from "@shared/input-float/input-float.component";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	standalone: true,
	imports: [ReactiveFormsModule, InputFloatComponent, NgClass],
})
export class LoginComponent {
	classComponent = CLASS;

	loginForm = new FormGroup({
		email: new FormControl(""),
		password: new FormControl(""),
	});

	doLogin() {
		console.log("doLogin");
		if (this.loginForm.valid) {
		} else {
			this.loginForm.markAllAsTouched();
		}
	}

	get classInput() {
		const classes = this.classComponent["input"];
		return classes ? classes : {};
	}
}
