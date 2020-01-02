import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url);
  }

  getAllRepos(name): Observable<any> {
    const url = `${environment.apiUrl}/users/${name}/repos`;
    return this.http.get(url);
  }
}
