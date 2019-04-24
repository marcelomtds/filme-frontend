import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuscarService } from './buscar/buscar.service';
import { AppService } from './app.service';
import { Filme } from './filme/filme';
import { EventEmitterService } from './event-emitter.service';
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private emitter: EventEmitterService) { }

  titulo: string;
  nomeUsuario: string;
  usuario: Usuario;

  ngOnInit() {
    this.usuario = new Usuario();
    this.buscarNomeusuario();
  }
  
  pesquisar(): void {
    this.emitter.get('title').emit(this.titulo);
  }
  
  buscarNomeusuario(){
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if(this.usuario){
      this.nomeUsuario = this.usuario.nome;
    } else {
      this.nomeUsuario = "Visitante";
    }
  }

  logout(){
    localStorage.setItem('chave', 'naoliberado');
    localStorage.setItem('usuarioLogado', null);
    localStorage.setItem("idUsuario" , null);
    this.usuario = null;
  }
}
