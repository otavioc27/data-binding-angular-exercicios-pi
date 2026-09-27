import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-projetos',
  standalone: false,
  templateUrl: './painel-projetos.html',
  styleUrl: './painel-projetos.css',
})
export class PainelProjetos {

   projetos = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe A',
      nota: 9.0,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Finanças',
      equipe: 'Equipe B',
      nota: 8.5,
      status: 'testes',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Site de E-commerce',
      equipe: 'Equipe C',
      nota: 7.5,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Sistema Escolar',
      equipe: 'Equipe D',
      nota: 0,
      status: 'planejamento',
      entregue: false
    }
  ];

}

