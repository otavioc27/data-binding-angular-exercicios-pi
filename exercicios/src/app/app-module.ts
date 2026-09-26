import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SituacaoDoUsuario } from './lista2-exercicios/situacao-do-usuario/situacao-do-usuario';
import { ListaVazia } from './lista-vazia/lista-vazia';

@NgModule({
  declarations: [App, ListaVazia],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
