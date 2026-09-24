import { Component } from '@angular/core';

@Component({
  selector: 'app-situacao-do-estoque',
  standalone: false,
  templateUrl: './situacao-do-estoque.html',
  styleUrl: './situacao-do-estoque.css',
})
export class SituacaoDoEstoque {

  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }

}
