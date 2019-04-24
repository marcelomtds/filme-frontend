import { Component, OnInit, Input } from '@angular/core';
import { IndicacaoService } from './indicacao.service';
import { Usuario } from '../usuario/usuario';
import { Indicacao } from './indicacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicacao',
  templateUrl: './indicacao.component.html',
  styleUrls: ['./indicacao.component.css']
})
export class IndicacaoComponent implements OnInit {

  constructor(private service: IndicacaoService, private router: Router) { }

  @Input()
  idFilme: number;

  usuarios: Array<Usuario>;
  usuario: Usuario;
  indicacao: Indicacao;
  idUsuarioLogado: number;

  ngOnInit() {
    this.indicacao = new Indicacao();
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
    this.buscarTodos();
  }

  buscarTodos() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (this.usuario) {
      this.idUsuarioLogado = this.usuario.id;
      return this.service.buscarTodos(this.usuario.id).subscribe(usuarios => this.usuarios = usuarios);
    }
  }

  inserir() {
    this.indicacao.idFilme = this.idFilme;
    this.indicacao.idUsuario = this.idUsuarioLogado;
    if (this.usuario) {
      this.service.inserir(this.indicacao).subscribe();
    } else {
      if (confirm("Você precisa estar logado para indicar! Deseja fazer login?")) {
        this.router.navigate(["/login"]);
      }
    }
  }

}
