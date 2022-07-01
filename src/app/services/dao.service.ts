import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  public baseUrl = 'http://127.0.0.1:5000/';
  constructor(private httpClient: HttpClient) { }

  public getRelevantDocuments(searchQuery: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseUrl + 'reldocs?query=' + searchQuery);
  }

  public getNewRelevantDocuments(userRelevantDocumentList: string[]): Observable<string[]> {
    return this.httpClient.get<string[]>(this.baseUrl + 'userreldocs?docslist=' + userRelevantDocumentList);
  }
}
