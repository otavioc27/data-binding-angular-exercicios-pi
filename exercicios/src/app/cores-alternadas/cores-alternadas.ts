import { Component } from '@angular/core';

@Component({
  selector: 'app-cores-alternadas',
  standalone: false,
  templateUrl: './cores-alternadas.html',
  styleUrl: './cores-alternadas.css',
})
export class CoresAlternadas {

  disciplinas = [
    'Programação',
    'Banco de Dados',
    'Engenharia de Software',
    'Desenvolvimento Web',
    'Redes de Computadores',
    'Sistemas Operacionais'
  ];

}

