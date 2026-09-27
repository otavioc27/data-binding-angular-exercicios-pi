import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tarefas',
  standalone: false,
  templateUrl: './tarefas.html',
  styleUrls: ['./tarefas.css']
})
export class Tarefas {

  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Fazer relatório',
      responsavel: 'Bárbara',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Organizar documentos',
      responsavel: 'Ana',
      prioridade: 'média',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Enviar e-mail',
      responsavel: 'Carlos',
      prioridade: 'baixa',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Estudar para a prova',
      responsavel: 'Maria',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Fazer apresentação',
      responsavel: 'João',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Revisar trabalho',
      responsavel: 'Julia',
      prioridade: 'baixa',
      concluida: true
    }
  ];

  alterarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  tarefasConcluidas(): number {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  tarefasPendentes(): number {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }
}