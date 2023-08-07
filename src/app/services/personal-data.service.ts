import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private apiUrl: string = './assets/data.json';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Object> {
    return this.http.get<Object>(this.apiUrl);
  }
}
