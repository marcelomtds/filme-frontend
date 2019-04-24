import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})

export class FilmeComponent implements OnInit {

  filme: Filme;

  constructor() { }

  ngOnInit() {
    this.filme = new Filme();
  }
}
