import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  produtos = [
    { nome: 'Arroz', quantidade: 10 },
    { nome: 'Feijão', quantidade: 5 },
    { nome: 'Macarrão', quantidade: 8 }
  ];

  nomeProduto: string = '';
  quantidadeProduto: number | null = null;
  mensagem: string = '';

  cadastrar() {
    if (
      this.nomeProduto.trim() === '' ||
      this.quantidadeProduto === null ||
      this.quantidadeProduto < 0
    ) {
      this.mensagem = 'Não foi possível cadastrar o produto.';
      return;
    }

    this.produtos.push({
      nome: this.nomeProduto,
      quantidade: this.quantidadeProduto
    });

    this.nomeProduto = '';
    this.quantidadeProduto = null;
    this.mensagem = '';
  }

  excluir(index: number) {
    this.produtos.splice(index, 1);
  }
}

