import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditemsoverviewComponent } from './fooditemsoverview/fooditemsoverview.component';
import { SuggestComponent } from './suggest/suggest.component';

const routes: Routes = [
  { path : 'suggest', component: SuggestComponent},
  { path: 'overview', component : FooditemsoverviewComponent},
  { path: '', redirectTo: '/suggest', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
