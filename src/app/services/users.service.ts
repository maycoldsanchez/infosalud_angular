import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";

@Injectable({
	providedIn: "root",
})
export class UsersService {
	apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getData() {
		return this.http.get<any>(`${this.apiUrl}/users`);
	}
}
