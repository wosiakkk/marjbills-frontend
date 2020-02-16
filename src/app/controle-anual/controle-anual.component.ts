import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-controle-anual',
  templateUrl: './controle-anual.component.html'
})
export class ControleAnualComponent implements OnInit {

  idCOntrole: Params

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.
      route.
      params.
      subscribe(params => {
        this.idCOntrole = params
      });
  }

}
