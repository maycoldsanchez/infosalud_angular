import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
	selector: "app-dashboard-template",
	standalone: true,
	imports: [SidebarComponent, NavbarComponent, RouterOutlet],
	templateUrl: "./dashboard-template.component.html",
})
export class DashboardTemplateComponent {}
