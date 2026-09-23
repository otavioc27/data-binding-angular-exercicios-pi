import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2ExerciciosRoutingModule } from './lista2-exercicios-routing-module';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';

@NgModule({
  declarations: [ExibicaoDeMensagem],
  imports: [CommonModule, Lista2ExerciciosRoutingModule],
})
export class Lista2ExerciciosModule {
  mensagemVisivel: boolean = true;

  

}
