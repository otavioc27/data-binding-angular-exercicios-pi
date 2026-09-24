import { Component } from '@angular/core';

@Component({
  selector: 'app-verificacao-de-idade',
  standalone: false,
  templateUrl: './verificacao-de-idade.html',
  styleUrl: './verificacao-de-idade.css',
})
export class VerificacaoDeIdade {


  idade: number = 18;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
