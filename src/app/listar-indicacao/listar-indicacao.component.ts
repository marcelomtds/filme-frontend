import { Component, OnInit } from '@angular/core';
import { Indicacao } from '../indicacao/indicacao';
import { Usuario } from '../usuario/usuario';
import { IndicacaoService } from '../indicacao/indicacao.service';
import { ListarIndicacaoService } from './listar-indicacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-indicacao',
  templateUrl: './listar-indicacao.component.html',
  styleUrls: ['./listar-indicacao.component.css']
})
export class ListarIndicacaoComponent implements OnInit {

  constructor(private service: ListarIndicacaoService, private router: Router) { }

  indicacao: Indicacao;
  usuario: Usuario;
  indicacoes: Array<Indicacao>;

  ngOnInit() {
    this.indicacao = new Indicacao();
    this.usuario = new Usuario();
    this.indicacoes = new Array<Indicacao>();
    this.buscarPorId();
  }

  buscarPorId() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (this.usuario) {
      this.service.buscarPorId(this.usuario.id).subscribe(indicacoes => {
        this.indicacoes = indicacoes;
      });
    } else {
      if (confirm("Você precisa estar logado para ver suas indicações! Deseja fazer login?")) {
        this.router.navigate(["/login"]);
      }
    }
  }
}
