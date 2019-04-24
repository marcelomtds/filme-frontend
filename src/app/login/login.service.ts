import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:8080/usuario/autenticar/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  autenticar(email: string, senha:string): Observable<Usuario>{
    return this.http.get<Usuario>(URL + email + "/" + senha);
  }
}
