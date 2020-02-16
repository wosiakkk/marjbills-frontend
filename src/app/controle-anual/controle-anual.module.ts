import { NgModule } from '@angular/core';
import { ControleAnualComponent } from './controle-anual.component';
import { RouterModule,Routes } from '@angular/router';
import { ControleAnualService } from './controle-anual.service';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'

const ROUTES: Routes = [
    {path: '', component: ControleAnualComponent}
]

@NgModule({
   declarations: [ControleAnualComponent],
   imports:[CommonModule,RouterModule, DropdownModule, TabViewModule, FormsModule, RouterModule.forChild(ROUTES)],
   providers:[ControleAnualService]  
})
export class ControleAnualModule{}