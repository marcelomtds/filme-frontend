import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component'
import { AuthGuardService } from './guards/auth-guard.service';
import { BuscarComponent } from './buscar/buscar.component';
import { DetalharComponent } from './detalhar/detalhar.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { IndicacaoComponent } from './indicacao/indicacao.component';
import { ListarIndicacaoComponent } from './listar-indicacao/listar-indicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    LoginComponent,
    BuscarComponent,
    DetalharComponent,
    CadastrarUsuarioComponent,
    ComentarioComponent,
    IndicacaoComponent,
    ListarIndicacaoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
