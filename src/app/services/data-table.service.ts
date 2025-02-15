import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  getData(path: string) {
    return this.http.get<any>(`${this.apiUrl}/${path}`);
  }
}
