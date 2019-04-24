import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../filme/filme';

const URL = 'http://localhost:8080/filme/buscarPorTituloOMDb/';

@Injectable({
  providedIn: 'root'
})

export class BuscarService {
  constructor(private http: HttpClient) { }

  buscarOMDb(titulo: string): Observable<Filme[]>{
    return this.http.get<Filme[]>(URL + titulo)
  }
}
