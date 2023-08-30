import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dogs', pathMatch: 'full'},
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/:id', component: DogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
