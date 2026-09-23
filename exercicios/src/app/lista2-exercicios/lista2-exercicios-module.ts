import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2ExerciciosRoutingModule } from './lista2-exercicios-routing-module';
import { ExibicaoDeMensagem } from './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';

@NgModule({
  declarations: [ExibicaoDeMensagem, SituacaoDoUsuario],
  imports: [CommonModule, Lista2ExerciciosRoutingModule],
})
export class Lista2ExerciciosModule {
  mensagemVisivel: boolean = true;
}
