import { NgModule } from '@angular/core';
import { ControlesComponent } from './controles.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule, Routes } from '@angular/router';
import { ControlesService } from './controles.service';
import {AccordionModule} from 'primeng/accordion';

const ROUTES: Routes = [
    {path: '', component: ControlesComponent}
]

@NgModule({
    declarations: [ControlesComponent],
    imports: [CommonModule, TableModule, PaginatorModule, AccordionModule, RouterModule,RouterModule.forChild(ROUTES)],
    providers: [ControlesService]

})
export class ControlesModule{}