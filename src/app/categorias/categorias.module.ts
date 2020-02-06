import { NgModule } from '@angular/core'
import { CategoriasComponent } from './categorias.component'
import { RouterModule, Routes } from '@angular/router'
import { CategoriaService } from './categorias.service'
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
    {path: '', component: CategoriasComponent}
]


@NgModule({
    declarations: [CategoriasComponent],
    imports: [CommonModule, RouterModule , RouterModule.forChild(ROUTES)], 
    providers: [CategoriaService]
})
export class CategoriasModule {}