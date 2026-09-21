import { Component } from '@angular/core';
@Component({ selector: 'app-exercicio9', standalone: false, templateUrl: './exercicio9.html' })
export class Exercicio9 { estoque = 0; aumentar() { this.estoque++; } diminuir() { if (this.estoque) this.estoque--; } }
