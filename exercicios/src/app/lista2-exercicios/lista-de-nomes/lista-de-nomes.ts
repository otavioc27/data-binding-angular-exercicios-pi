import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-nomes',
  standalone: false,
  templateUrl: './lista-de-nomes.html',
  styleUrl: './lista-de-nomes.css',
})
export class ListaDeNomes {

  nomes = ['Otavio', 'Carlos', 'João', 'Pedro', 'Lucas'];

}

