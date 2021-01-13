import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatListComponent} from './cat-list/cat-list.component';
import {CatFormComponent} from './cat-form/cat-form.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: '', component: CatListComponent},
    {path: 'form', component: CatFormComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}