import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
	FontAwesomeModule,
	IconDefinition,
} from "@fortawesome/angular-fontawesome";
import { faHome, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { LINKS_ADMIN, RouteInfo } from "./sidebar.links";

@Component({
	selector: "app-sidebar",
	standalone: true,
	imports: [FontAwesomeModule, RouterModule],
	templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
	iconsMenu: Record<string, IconDefinition> = {
		home: faHome,
		users: faUserGroup,
	};

	urlLinks: RouteInfo[] = LINKS_ADMIN;

	setIconsMenu(icon: string) {
		return this.iconsMenu[icon];
	}
}
