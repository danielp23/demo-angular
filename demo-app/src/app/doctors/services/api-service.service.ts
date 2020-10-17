import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiHost = ''

interface IQueryString {
  [key: string] : any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private endpoint = apiHost;

  constructor(private httpClient: HttpClient ) { }

  get<T>(path: string, params?: IQueryString): Observable<T>{
    return this.httpClient.get<T>(`${this.endpoint}${path}`, {params});
  }

  post<T>(path: string, body, params?: IQueryString): Observable<T>{
    return this.httpClient.post<T>(`${this.endpoint}${path}`, body, {params});
  }
}
