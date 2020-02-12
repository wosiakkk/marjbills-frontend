import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model'
import { CategoriaService } from './categorias.service';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {

  categoria: Categoria = new Categoria();
  categorias: Categoria[];
  cols: any[];
  loading: boolean;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(){
    this.loading = true;
    setTimeout(() => {
      this.categoriaService.getCategorias().subscribe(
        response => this.categorias = response
      );
      this.loading = false;
    }, 500);
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'desc', header: 'Descrição' },
      { field: 'editar', header: 'Editar' },
      { field: 'excluir', header: 'Excluir' }
    ]
  }
  
  salvarCategoria(){
    this.categoriaService.salvar(this.categoria).subscribe(
      response => {
        alert("salvo com sucesso");
        this.categoriaService.getCategorias().subscribe(
          response =>{
            this.categorias = response
          }
        )
        this.categoria.descricao = "";
      },
      error =>{
        alert("erro ao salvar");
      }
    )
  }

  deletar(categoria: Categoria){
    this.categoriaService.deletar(categoria).subscribe(
      response =>{
        alert("deletado com sucesso");
        this.categoriaService.getCategorias().subscribe(
          response =>{
            this.categorias = response
          }
        )
      },
      error =>{
        alert("Essa Categoria está em uso!");
      }
    )
  }

  clear(){
    this.categoria.descricao = "";
    this.categoria.id = "";
    this.categoriaService.getCategorias().subscribe(
      response => this.categorias = response
    )
  }

  setParaEdit(categoria: Categoria){
    this.categoria = categoria;
  }

  editarCategoria(){
    this.categoriaService.editar(this.categoria).subscribe(
      response =>{
        alert("editado com sucesso");
        this.categoriaService.getCategorias().subscribe(
          response =>{
            this.categorias = response
          }
        )
        this.categoria.descricao = "";
        this.categoria.id = "";
      },
      error =>{
        alert("problema ao editar");
      }
    )
  }

}
