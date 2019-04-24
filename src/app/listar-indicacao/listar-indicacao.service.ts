import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicacao } from '../indicacao/indicacao';
import { Observable } from 'rxjs';

const URL = 'http://localhost:8080/indicacao/';

@Injectable({
  providedIn: 'root'
})
export class ListarIndicacaoService {

  constructor(private http: HttpClient) { }
  
  buscarPorId(idUsuarioLogado): Observable<Indicacao[]>{
    return this.http.get<Indicacao[]>(URL + idUsuarioLogado)
  }
}
