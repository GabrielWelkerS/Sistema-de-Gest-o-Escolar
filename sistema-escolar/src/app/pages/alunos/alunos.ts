import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-alunos',
  styleUrl: './alunos.css',
  templateUrl: './alunos.html',
})

export class Alunos implements OnInit {
  idAluno: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idAluno = this.route.snapshot.paramMap.get('id');

    console.log('ID do aluno:', this.idAluno);
  }

alunos = [
  { id: 1001, nome: 'Davi' },
  { id: 1002, nome: 'Giovanny' },
  { id: 1003, nome: 'Thimoteo' }
];

}

