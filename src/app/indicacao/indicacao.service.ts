import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Indicacao } from './indicacao';

const URL = 'http://localhost:8080/usuario/buscarTodos/';
const URL_INSERIR = 'http://localhost:8080/indicacao';

@Injectable({
  providedIn: 'root'
})

export class IndicacaoService {

  constructor(private http: HttpClient) { }

  buscarTodos(idUsuarioLogado: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(URL + idUsuarioLogado);
  }

  inserir(indicadao: Indicacao): Observable<void>{
    return this.http.post<void>(URL_INSERIR, indicadao);
  }
}
