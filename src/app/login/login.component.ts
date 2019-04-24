import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario/usuario';
import { LoginService } from './login.service';
import { Alert } from 'selenium-webdriver';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  titulo: string;

  constructor(private emitter: EventEmitterService, private router: Router, private service: LoginService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login() {
    this.service.autenticar(this.usuario.email, this.usuario.senha).subscribe(resp => {
      this.usuario = resp;
      if (this.usuario != null) {
        localStorage.setItem('chave', 'liberado');
        localStorage.setItem('usuarioLogado', JSON.stringify(this.usuario));
        localStorage.setItem('nomeUsuario', this.usuario.nome);
        localStorage.setItem('idUsuario', JSON.stringify(this.usuario.id));
        this.router.navigate(['']);
      } else {
        if (confirm('Usuário não cadastrado! Deseja se cadastrar?')) {
          this.router.navigate(['cadastrarUsuario']);
        }
      }
    });
  }

}
