import { Component } from '@angular/core';

@Component({
  selector: 'app-situacao-do-usuario',
  standalone: false,
  templateUrl: './situacao-do-usuario.html',
  styleUrl: './situacao-do-usuario.css',
})
export class SituacaoDoUsuario {

usuarioLogado: boolean = false;

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;

}
}
