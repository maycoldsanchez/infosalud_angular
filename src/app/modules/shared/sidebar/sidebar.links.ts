export interface RouteInfo {
	path: string;
	title: string;
	icon: string;
}

export const LINKS_ADMIN: RouteInfo[] = [
	{ path: "/app", title: "Home", icon: "home" },
	{ path: "/users", title: "Usuarios", icon: "users" },
];
