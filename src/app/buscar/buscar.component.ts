import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Filme } from '../filme/filme';
import { AppService } from '../app.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {
  titulo: string;
  filmes: Array<Filme>;

  constructor(
    private emitter: EventEmitterService, 
    private route: ActivatedRoute, 
    private service: AppService, 
    public router: Router) { }

  ngOnInit() { 
    this.emitter.get('title').subscribe(titulo => this.buscarPorTitulo(titulo));
    this.filmes = new Array<Filme>();
    this.buscarPorTitulo(this.titulo);
  }

  buscarDetalhes(): void {
    this.emitter.get('buscarDetalhes').emit(this.titulo);
  }

  logout() {
    localStorage.setItem('chave', 'naoliberado');
    this.router.navigate(["/login"]);
  }
  
  buscarPorTitulo(titulo) {
    if(titulo == undefined) {
      this.service.buscarTodos().subscribe(resp => this.filmes = resp);
    } else {
      this.service.buscarPorTitulo(titulo).subscribe(resp => { 
        this.filmes = resp;
        if (this.filmes == null) {
          if (confirm("Nenhum filme encontrado! Deseja Buscar no OMDb?")) {
            this.service.buscarPorTituloOMDb(titulo).subscribe(resp => {
            this.filmes = resp;
            if(this.filmes == null){
              alert("Nenhum filme encontrado com esse título!");
            }
          });
          }
        }
      });
    }
    Object(this.titulo);
  }  
}
