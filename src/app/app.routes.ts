import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

export const ROUTES: Routes = [
    {path : 'home', component: HomeComponent},
    {path : '', pathMatch: 'full', redirectTo: '/home'},
    {path : 'movimentacoes', loadChildren: () => import('./meses/meses.module').then(m => m.MesesModule)},
    {path : 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)},
    {path : 'controles', loadChildren: () => import('./controles/controles.module').then(m => m.ControlesModule)},
    {path : 'ano/:id' , loadChildren: () => import('./controle-anual/controle-anual.module').then(m => m.ControleAnualModule)}
]