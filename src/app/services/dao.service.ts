import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  public baseUrl = 'http://127.0.0.1:5000/';
  constructor(private httpClient: HttpClient) { }

  public getDocName(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseUrl + 'docs');
  }
}
