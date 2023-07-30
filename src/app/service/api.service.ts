import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Character } from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://rickandmortyapi.com/api/character/'

  apiUrl: string = '/characters'

  constructor(private http: HttpClient) { }

  getAll():Observable <any> {
    return this.http.get(this.url)
  }

  saveCharacter(character: Character): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, character);
  }

  getPage(counter: number): Observable <any> {
    return this.http.get(this.url + '?page='+ counter)
  }

  filterCharacters(name:string): Observable<any> {
    return this.http.get(this.url + '?name=' + name)
  }

  saveCharacterMock(character: Character): Observable<Character> {
    return of(character);
    /*return throwError({ message: 'Errore durante il salvataggio.' }).pipe(
      catchError((error) => {
        console.log(error.message);
        return throwError(error);
      })
    )*/
  }

  //getSingleCharacter(id: string): Observable <Character> {
  //  return this.http.get(this.url + '/' + id)
  //}

  getSingleCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(this.url + '/' + id)
  }

  getSingleCharacter$ = (id: string):Observable<Character> => this.http.get<Character>(this.url + '/' + id);
}
