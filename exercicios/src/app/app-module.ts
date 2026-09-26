import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SituacaoDoUsuario } from './lista2-exercicios/situacao-do-usuario/situacao-do-usuario';
import { ListaVazia } from './lista-vazia/lista-vazia';
import { CoresAlternadas } from './cores-alternadas/cores-alternadas';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { ClassificacaoProdutos } from './classificacao-produtos/classificacao-produtos';

@NgModule({
  declarations: [App, ListaVazia, CoresAlternadas, ListaProdutos, ClassificacaoProdutos],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
