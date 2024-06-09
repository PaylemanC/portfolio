import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  private apiUrl: string = './assets/data/data.json';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
