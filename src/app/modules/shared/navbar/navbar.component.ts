import { Component, signal } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [OverlayModule],
	templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
	isOpenOverlayAvatar = signal(false);

	toggleOverlay() {
		console.log(this.isOpenOverlayAvatar());
		this.isOpenOverlayAvatar.set(!this.isOpenOverlayAvatar());
	}
}
