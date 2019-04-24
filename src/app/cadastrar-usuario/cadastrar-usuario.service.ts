import { Observable } from 'rxjs';
import { Resposta } from '../filme/Resposta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario/usuario';

const URL = 'http://localhost:8080/usuario';

@Injectable({
  providedIn: 'root'
})

export class CadastrarUsuarioService {

  constructor(private http: HttpClient) { }

  inserirFoto(formData: FormData): Observable<Resposta> {
    return this.http.post<Resposta>(URL + "/foto", formData);
  }

  inserirUsuario(usuario: Usuario): Observable<void> {
    return this.http.post<void>(URL, usuario);
  }
}
