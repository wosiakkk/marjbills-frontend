import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Controle } from '../controles/controle/controle.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ControleAnualService{

    constructor(private http: HttpClient){}


    getControleById(controle: Controle){
        return this.http.get<Controle>(environment.apiUrl + "/controle/" + controle.id)
    }



}