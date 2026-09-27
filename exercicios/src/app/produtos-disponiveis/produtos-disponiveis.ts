import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos-disponiveis',
  standalone: false,
  templateUrl: './produtos-disponiveis.html',
  styleUrl: './produtos-disponiveis.css',
})
export class ProdutosDisponiveis {

  somenteDisponiveis = false;

  produtos = [
    { nome: 'Notebook', preco: 3500, estoque: 5 },
    { nome: 'Celular', preco: 2000, estoque: 0 },
    { nome: 'Fone de ouvido', preco: 150, estoque: 10 },
    { nome: 'Teclado', preco: 250, estoque: 0 }
  ];
}

