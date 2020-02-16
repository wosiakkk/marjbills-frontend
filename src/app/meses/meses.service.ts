import { Mes } from './mes/mes2.model'
import{ HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class MesesService{

    constructor(private http: HttpClient){}


    meses(): Observable<Mes[]>{
        return this.http.get<Mes[]>("http://localhost:8080/mes");
    }

}