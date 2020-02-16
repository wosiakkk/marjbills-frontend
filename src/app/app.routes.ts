import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const ROUTES: Routes = [
    {path : 'home', component: HomeComponent},
    {path : '', pathMatch: 'full', redirectTo: '/home'},
    {path : 'movimentacoes', loadChildren: './meses/meses.module#MesesModule'},
    {path : 'categorias', loadChildren: './categorias/categorias.module#CategoriasModule'},
    {path : 'controles', loadChildren: './controles/controles.module#ControlesModule'},
    {path : 'ano/:id' , loadChildren: './controle-anual/controle-anual.module#ControleAnualModule'}
]