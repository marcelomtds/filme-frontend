import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from './filme/filme';

const URL_POR_TITULO = 'http://localhost:8080/filme/buscarPorTitulo/';
const URL_POR_TITULO_OMDB = 'http://localhost:8080/filme/buscarPorTituloOMDb/';
const URL_TODOS = 'http://localhost:8080/filme';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  buscarPorTitulo(titulo: string): Observable<Filme[]>{
    return this.http.get<Filme[]>(URL_POR_TITULO + titulo);
  }

  buscarPorTituloOMDb(titulo: string): Observable<Filme[]>{
    return this.http.get<Filme[]>(URL_POR_TITULO_OMDB + titulo);
  }

  buscarTodos(): Observable<Filme[]>{
    return this.http.get<Filme[]>(URL_TODOS);
  }

}
