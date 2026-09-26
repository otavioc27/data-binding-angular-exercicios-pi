import { Component } from '@angular/core';

@Component({
  selector: 'app-promocao-produtos',
  standalone: false,
  templateUrl: './promocao-produtos.html',
  styleUrl: './promocao-produtos.css',
})
export class PromocaoProdutos {

  produtos = [
    {
      nome: 'Teclado',
      preco: 80,
      promocao: true
    },
    {
      nome: 'Mouse',
      preco: 50,
      promocao: false
    },
    {
      nome: 'Monitor',
      preco: 900,
      promocao: true
    },
    {
      nome: 'Headset',
      preco: 150,
      promocao: false
    },
    {
      nome: 'Webcam',
      preco: 200,
      promocao: true
    }
  ];

  alterarPromocao(produto: any) {
    produto.promocao = !produto.promocao;
  }

}

