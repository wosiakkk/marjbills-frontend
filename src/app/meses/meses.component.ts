import { Component, OnInit } from '@angular/core';
import { MesesService } from '../meses/meses.service'
import { Mes } from './mes/mes.model';

@Component({
  selector: 'app-mes',
  templateUrl: './meses.component.html'
})
export class MesesComponent implements OnInit {

  meses: Mes[]

  constructor(private mesesService: MesesService) { }

  ngOnInit() {
    this.mesesService.meses().subscribe(
      response => {
        this.meses = response
      }
    )
  }

}
