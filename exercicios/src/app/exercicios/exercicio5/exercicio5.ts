import { Component } from '@angular/core';
@Component({ selector: 'app-exercicio5', standalone: false, templateUrl: './exercicio5.html' })
export class Exercicio5 { curtidas = 0; curtir() { this.curtidas++; } }
