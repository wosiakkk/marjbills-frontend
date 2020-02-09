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

    salvar(categoria: Categoria): Observable<Categoria>{
        return this.http.post<Categoria>("http://localhost:8080/categoria", categoria)
    }

    deletar(categoria: Categoria): Observable<any>{
        return this.http.delete<any>("http://localhost:8080/categoria/" + categoria.id)
    }

    editar(categoria: Categoria): Observable<Categoria>{
        return this.http.put<Categoria>("http://localhost:8080/categoria", categoria)
    }

}
