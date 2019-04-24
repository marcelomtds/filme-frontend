import { Injectable } from '@angular/core';
import { Comentario } from './comentario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:8080/comentario/';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {
  
  constructor(private http: HttpClient) { }

  comentar(comentario: Comentario): Observable<void>{
    return this.http.post<void>(URL, comentario);
  }
}
