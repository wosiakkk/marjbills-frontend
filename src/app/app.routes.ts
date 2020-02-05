import { Routes } from '@angular/router'
import { MainContentComponent } from './main-content/main-content.component'
import { MesesComponent } from './meses/meses.component'

export const ROUTES: Routes = [
    {path : 'home', component: MainContentComponent},
    {path : '', pathMatch: 'full', redirectTo: '/home'},
    {path : 'movimentacoes', component: MesesComponent}
]