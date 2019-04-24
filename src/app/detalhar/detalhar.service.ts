import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../filme/filme';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../comentario/comentario';

const URL = 'http://localhost:8080/filme/buscarPorIdOMDb/';
const URL_COMENTARIO = 'http://localhost:8080/comentario/';

@Injectable({
  providedIn: 'root'
})

export class DetalharService {

  constructor(private http: HttpClient) { }

  buscarPorIdOMDb(imdbId: string): Observable<Filme>{
    return this.http.get<Filme>(URL + imdbId);
  }

  buscarComentarios(idFilme:number): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(URL_COMENTARIO + idFilme);
  }
}
