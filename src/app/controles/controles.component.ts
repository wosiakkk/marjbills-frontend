import { Component, OnInit } from '@angular/core';
import { ControlesService } from './controles.service';
import { Controle } from './controle/controle.model';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html'
})
export class ControlesComponent implements OnInit {

  constructor(private controlesService: ControlesService) { }

  controle: Controle = new Controle();
  controles: Controle[];
  cols: any[];
  loading: boolean;

  ngOnInit() {
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

}
