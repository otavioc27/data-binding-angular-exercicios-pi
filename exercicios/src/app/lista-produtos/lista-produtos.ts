import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  produtos = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 80,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 50,
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 150,
      quantidade: 4
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 200,
      quantidade: 2
    }
  ];

}


