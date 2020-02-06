import { Categoria } from './categoria/categoria.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn : 'root'
})
export class CategoriaService {

    constructor(private http: HttpClient){}

    getCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>("http://localhost:8080/categoria")
    }


}
