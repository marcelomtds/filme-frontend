import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalharService } from './detalhar.service';
import { Filme } from '../filme/filme';
import { Comentario } from '../comentario/comentario';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DetalharService) { }

  @Input()
  idFilme: number;

  imdbId: string;

  filme: Filme;
  comentarios: Array<Comentario>;

  ngOnInit() {
    this.filme = new Filme();
    this.comentarios = new Array();
    this.imdbId = this.route.snapshot.paramMap.get('f.imdbID');
    this.buscarPorIMDb();
  }

  buscarPorIMDb() {
    if (this.imdbId) {
      this.service.buscarPorIdOMDb(this.imdbId).subscribe(resp => {
        this.filme = resp,
          this.idFilme = this.filme.id;
        if (this.idFilme) {
          this.service.buscarComentarios(this.filme.id).subscribe(resp => {
            this.comentarios = resp;
          });
        }
      });
    }

  }
}
