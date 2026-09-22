import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: "exercicios",
    loadChildren: () => import('./exercicios/exercicios-module').then(m => m.ExerciciosModule)
},
{
  path: 'lista2-exercicios',
  loadChildren: () => import('./lista2-exercicios/lista2-exercicios-module').then(m => m.Lista2ExerciciosModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
