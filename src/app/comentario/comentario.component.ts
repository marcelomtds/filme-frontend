import { Component, OnInit, Output, Input } from '@angular/core';
import { Comentario } from './comentario';
import { ComentarioService } from './comentario.service';
import { Usuario } from '../usuario/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})

export class ComentarioComponent implements OnInit {

  constructor(private service: ComentarioService, private router: Router) { }

  @Input()
  idFilme: number;

  @Input()
  imdbId: string;

  usuario: Usuario;
  comentario: Comentario;

  ngOnInit() {
    this.comentario = new Comentario();
    this.usuario = new Usuario();
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  }

  comentar() {
    if (this.usuario) {
      this.comentario.idUsuario = this.usuario.id;
      this.comentario.idFilme = this.idFilme;
      this.service.comentar(this.comentario).subscribe(() => {
        this.router.navigate(['/filmeDetalhes/' + this.imdbId])
      });
    } else {
      if (confirm("Você precisa estar logado para comentar! Deseja fazer login?")) {
        this.router.navigate(["/login"]);
      }
    }
  }
}
