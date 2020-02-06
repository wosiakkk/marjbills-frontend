import { NgModule } from '@angular/core'
import { MesesComponent} from './meses.component'
import { RouterModule, Routes } from '@angular/router'
import { MesesService } from './meses.service'
import { CommonModule } from '@angular/common';





const ROUTES: Routes = [
    {path: '', component: MesesComponent}
]

@NgModule({
    declarations:[MesesComponent,],
    imports:[RouterModule, RouterModule.forChild(ROUTES),CommonModule],
    providers:[MesesService]
})
export class MesesModule {}