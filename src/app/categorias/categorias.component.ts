import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model'
import { CategoriaService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[]

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

    this.categoriaService.getCategorias().subscribe(
      response => this.categorias = response
    )
  }

}
