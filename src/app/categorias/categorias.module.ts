import { NgModule } from '@angular/core'
import { CategoriasComponent } from './categorias.component'
import { RouterModule, Routes } from '@angular/router'
import { CategoriaService } from './categorias.service'
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';


const ROUTES: Routes = [
    {path: '', component: CategoriasComponent}
]


@NgModule({
    declarations: [CategoriasComponent],
    imports: [CommonModule,TableModule,PaginatorModule,RouterModule , RouterModule.forChild(ROUTES)], 
    providers: [CategoriaService]
})
export class CategoriasModule {}