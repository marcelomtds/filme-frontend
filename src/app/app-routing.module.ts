import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FilmeComponent } from './filme/filme.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { BuscarComponent } from './buscar/buscar.component';
import { DetalharComponent } from './detalhar/detalhar.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ListarIndicacaoComponent } from './listar-indicacao/listar-indicacao.component';

const routes: Routes = [
  //{ path: 'cadastrar', component: FilmeCadastrarComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', component: BuscarComponent },
  { path: 'filmeDetalhes/:f.imdbID' , component: DetalharComponent },
  { path: 'cadastrarUsuario' , component: CadastrarUsuarioComponent },
  { path: 'indicacoes' , component: ListarIndicacaoComponent }
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
}) 

export class AppRoutingModule { }