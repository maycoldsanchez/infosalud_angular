import { Routes } from "@angular/router";
import { RedirectGuard } from "@guards/redirect.guard";
import { HomeComponent } from "@modules/home/home.component";
import { DashboardTemplateComponent } from "@shared/template/dashboard-template/dashboard-template.component";
import { LoginTemplateComponent } from "@shared/template/login-template/login-template.component";

export const routes: Routes = [
	{
		path: "",
		component: LoginTemplateComponent,
		children: [
			{
				path: "",
				canActivate: [RedirectGuard],
				loadChildren: () =>
					import("./modules/auth/auth.module").then((m) => m.AuthModule),
			},
		],
	},
	{
		path: "app",
		component: DashboardTemplateComponent,
		children: [
			{
				path: "",
				component: HomeComponent,
			},
			{
				path: "users",
				loadChildren: () =>
					import("./modules/users/users.module").then((m) => m.UsersModule),
			},
		],
	},
];
