import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibicaoDeMensagem } from  './exibicao-de-mensagem/exibicao-de-mensagem';
import { SituacaoDoUsuario } from './situacao-do-usuario/situacao-do-usuario';
import { VerificacaoDeIdade } from './verificacao-de-idade/verificacao-de-idade';
import { SituacaoDoEstoque } from './situacao-do-estoque/situacao-do-estoque';
import { ListaDeNomes } from './lista-de-nomes/lista-de-nomes';
import { ListaVazia } from '../lista-vazia/lista-vazia';


const routes: Routes = [

  {  path: 'exibicao-de-mensagem', component: ExibicaoDeMensagem },
  {  path: 'situacao-do-usuario', component: SituacaoDoUsuario },
  {  path: 'verificacao-de-idade', component: VerificacaoDeIdade },
  {  path: 'situacao-do-estoque', component: SituacaoDoEstoque},
  {  path: 'lista-de-nomes', component: ListaDeNomes},
  {  path: 'lista-vazia', component: ListaVazia},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista2ExerciciosRoutingModule {}
