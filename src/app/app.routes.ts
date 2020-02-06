import { Routes } from '@angular/router'
import { MainContentComponent } from './main-content/main-content.component'

export const ROUTES: Routes = [
    {path : 'home', component: MainContentComponent},
    {path : '', pathMatch: 'full', redirectTo: '/home'},
    {path : 'movimentacoes', loadChildren: './meses/meses.module#MesesModule'},
    {path : 'categorias', loadChildren: './categorias/categorias.module#CategoriasModule'}
]