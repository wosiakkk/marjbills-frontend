import { Component, OnInit } from '@angular/core';
import { ControlesService } from './controles.service';
import { Controle } from './controle/controle.model';
import { error } from 'protractor';
import { Usuario } from './controle/usuario.model';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html'
})
export class ControlesComponent implements OnInit {

  constructor(private controlesService: ControlesService) { }
  usuario: Usuario = new Usuario();
  controle: Controle = new Controle();
  
  controles: Controle[];
  cols: any[];
  loading: boolean;

  ngOnInit() {
    this.controle.usuario=this.usuario;
    this.loading = true;
    setTimeout(() => {
      this.controlesService.getControles().subscribe(
        response => this.controles = response
      );
      this.loading = false;
    }, 500);
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'desc', header: 'Descrição' },
      { field: 'ano', header: 'Ano' },
      { field: 'acoes', header: 'Ações' }
    ]
  }

  salvarControle(){
    this.controlesService.salvar(this.controle).subscribe(
      response =>{
        alert("Salvo com sucesso!");
        this.controlesService.getControles().subscribe(
          response => this.controles = response
        );
        this.controle = new Controle();
      },
      error=>{
        alert("Problema ao cadastrar Controle!");
      }
    )
  }

  excluirControle(controle: Controle){
    this.controlesService.excluir(controle).subscribe(
      response =>{
        alert("Excluido o COntrole com Sucesso!");
        this.controlesService.getControles().subscribe(
          response => this.controles = response
        );
      },
      error =>{
        alert("Problema ao excluir Controle");
      }
    )
  }

  clear(){
    this.controle.descricao = "";
    this.controle.id = "";
    this.controlesService.getControles().subscribe(
      response => this.controles = response
    )
  }

  setParaEdit(controle: Controle){
    this.controle = controle;
  }

  editarControle(){
    this.controlesService.editar(this.controle).subscribe(
      response =>{
        alert("Controle editado com sucesso!");
        this.controlesService.getControles().subscribe(
          response =>{
            this.controles = response
          }
        )
      },
      error =>{
        alert("Problema ao editar Controle");
      }

    )
  }

}
