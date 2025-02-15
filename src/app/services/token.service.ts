import { Injectable } from "@angular/core";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";
import { jwtDecode } from "jwt-decode";

@Injectable({
	providedIn: "root",
})
export class TokenService {
	constructor() {}

	saveToken(token: string) {
		setCookie("infosalud-token", token, {
			expires: 365,
			path: "/",
		});
	}

	getToken() {
		return getCookie("infosalud-token");
	}

	removeToken() {
		removeCookie("infosalud-token");
	}

	isValidToken() {
		const token = this.getToken();
		if (!token) {
			return false;
		}

		const decodeToken = jwtDecode(token);
		if (decodeToken && decodeToken?.exp) {
			const tokenDate = new Date(0);
			const today = new Date();
			tokenDate.setUTCSeconds(decodeToken.exp);

			return tokenDate.getTime() > today.getTime();
		}

		return false;
	}
}
