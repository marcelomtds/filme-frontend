import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { CadastrarUsuarioService } from './cadastrar-usuario.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor(private service: CadastrarUsuarioService, private router: Router) { }

  senhaComparacao: string;
  usuario: Usuario;
  file: File = null;
  formData: FormData;
  caminhoFoto: string;

  ngOnInit() {

    this.usuario = new Usuario();
    this.formData = new FormData();
  }

  carregarFoto(event) {
    this.file = <File>event.target.files[0];
  }

  cadastrar() {
    console.log(this.file);
    if (this.usuario.senha != this.senhaComparacao) {
      alert("Senhas não conferem!");
    } else {
      if (this.file) {
        this.formData.append("file", this.file);
        this.service.inserirFoto(this.formData).subscribe(resp => {
          this.caminhoFoto = resp.caminhoCompleto;
          this.usuario.foto = this.caminhoFoto;
          this.inserirUsuario();
        });
      } else {
        this.inserirUsuario();
      }
    }
  }

  inserirUsuario() {
    this.service.inserirUsuario(this.usuario).subscribe(() => this.router.navigate(["/login"]));
  }
}
