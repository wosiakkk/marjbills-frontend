import { Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Controle } from './controle/controle.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ControlesService{

    constructor(private http: HttpClient){}

    getControles(): Observable<Controle[]>{
        return this.http.get<Controle[]>(environment.apiUrl + "/controle")
    }

}