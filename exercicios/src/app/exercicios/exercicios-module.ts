import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';

@NgModule({
  declarations: [Exercicio1],
  imports: [CommonModule, ExerciciosRoutingModule, FormsModule],
})
export class ExerciciosModule {}
