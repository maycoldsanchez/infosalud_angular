import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
	selector: "input-float",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./input-float.component.html",
})
export class InputFloatComponent {
	@Input({ required: true }) name: string = "";
	@Input({ required: true }) label: string = "";
	@Input() iconStart: boolean = false;
}
