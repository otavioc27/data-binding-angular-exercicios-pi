import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';

@NgModule({
  declarations: [Exercicio1, Exercicio2, Exercicio3],
  imports: [CommonModule, ExerciciosRoutingModule, FormsModule],
})
export class ExerciciosModule {}
