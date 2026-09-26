import { Component } from '@angular/core';

@Component({
  selector: 'app-classificacao-produtos',
  standalone: false,
  templateUrl: './classificacao-produtos.html',
  styleUrl: './classificacao-produtos.css',
})
export class ClassificacaoProdutos {

  produtos = [
    {
      nome: 'Teclado',
      quantidade: 5
    },
    {
      nome: 'Mouse',
      quantidade: 10
    },
    {
      nome: 'Monitor',
      quantidade: 0
    },
    {
      nome: 'Headset',
      quantidade: 3
    },
    {
      nome: 'Webcam',
      quantidade: 7
    }
  ];

}

