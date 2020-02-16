import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Controle } from '../controles/controle/controle.model';
import { ControleAnualService } from './controle-anual.service';
import { Categoria } from '../categorias/categoria/categoria.model';
import { CategoriaService } from '../categorias/categorias.service';




@Component({
  selector: 'app-controle-anual',
  templateUrl: './controle-anual.component.html'
})
export class ControleAnualComponent implements OnInit {

  controle: Controle = new Controle();
  categorias: Categoria[];
  selectedCategoria: Categoria;
  

  constructor(private route : ActivatedRoute,
    private controleAnualService: ControleAnualService,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.
      route.
      params.
      subscribe(params => {
        this.controle.id = params.id
      });
      this.controleAnualService.getControleById(this.controle).subscribe(
        response =>{
          this.controle = response
          //ordenando os meses
          this.controle.meses = this.controle.meses.sort((a,b) => a.id > b.id ? 1 : -1)
        }
      );
      this.categoriaService.getCategorias().subscribe(
        response =>{
          this.categorias = response
        }
      )
  }

}
