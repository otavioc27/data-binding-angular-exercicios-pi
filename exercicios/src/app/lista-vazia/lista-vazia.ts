import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-vazia',
  standalone: false,
  templateUrl: './lista-vazia.html',
  styleUrl: './lista-vazia.css',
})
export class ListaVazia {

  nomes = ['Otavio', 'Carlos', 'João', 'Pedro', 'Lucas'];

  listaInicial = ['Otavio', 'Carlos', 'João', 'Pedro', 'Lucas'];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}

