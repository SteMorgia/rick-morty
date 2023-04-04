import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://rickandmortyapi.com/api/character/'

  constructor(private http: HttpClient) { }

  getAll():Observable <any> {
    return this.http.get(this.url)
  }

  getPage(counter: number): Observable <any> {
    return this.http.get(this.url + '?page='+ counter)
  }

  filterCharacters(name:string): Observable<any> {
    return this.http.get(this.url + '?name=' + name)
  }

  getSingleCharacter(id: string): Observable <object> {
    return this.http.get(this.url + '/' + id)
  }

}
