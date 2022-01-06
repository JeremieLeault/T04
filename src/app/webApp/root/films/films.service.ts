import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Film } from 'src/assets/class/film';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  // injection de dépendances
  constructor(private _http:HttpClient) { }

  //Méthodes
  public getFilms = ():Observable<Film[]> => {
    return this._http.get<Film[]>('https://dev.webjs.fr/films.json').pipe(
      //pipe permet d'enchainer plusieurs opérateurs RXJS
      tap(ResponseHTTP => {
        console.warn('Depuis le service:', ResponseHTTP)
      }),
      map(
        //operateur de corresponce
        (datas:Film[]) => {
          return datas.filter((data:Film) =>{
            return data.id >=1
          })
        })
      )
  }
}
