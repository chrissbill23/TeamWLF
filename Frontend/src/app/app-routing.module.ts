import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchProjComponent} from './Components/search-proj/search-proj.component';
import {HomeComponent} from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'searchp', component: SearchProjComponent }
];
@NgModule({
   exports: [ RouterModule ],
   imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
