import { Component } from '@angular/core';

@Component({
  selector: 'app-exibicao-de-mensagem',
  standalone: false,
  templateUrl: './exibicao-de-mensagem.html',
  styleUrl: './exibicao-de-mensagem.css',
})
export class ExibicaoDeMensagem {
mensagemVisivel: boolean = false;

alternarMensagem(): void {
this.mensagemVisivel = !this.mensagemVisivel


}
  
}
