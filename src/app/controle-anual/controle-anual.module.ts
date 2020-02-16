import { NgModule } from '@angular/core';
import { ControleAnualComponent } from './controle-anual.component';
import { RouterModule,Routes } from '@angular/router';
import { ControleAnualService } from './controle-anual.service';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';

const ROUTES: Routes = [
    {path: '', component: ControleAnualComponent}
]

@NgModule({
   declarations: [ControleAnualComponent],
   imports:[CommonModule,RouterModule, TabViewModule, RouterModule.forChild(ROUTES)],
   providers:[ControleAnualService]  
})
export class ControleAnualModule{}