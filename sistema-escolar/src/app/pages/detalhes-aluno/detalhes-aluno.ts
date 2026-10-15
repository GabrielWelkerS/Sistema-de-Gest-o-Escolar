import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-detalhes-aluno',
  styleUrl: './detalhes-aluno.css',
  templateUrl: './detalhes-aluno.html',
})
export class DetalhesAluno implements OnInit {
  idAluno: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idAluno = this.route.snapshot.paramMap.get('id');

    const id = Number(this.idAluno);
    const alunoEncontrado = this.alunos.find(aluno => aluno.id === id);

    if (alunoEncontrado) {
      this.nomeAluno = alunoEncontrado.nome;
    }

  }

  alunos = [
    { id: 1001, nome: 'Davi' },
    { id: 1002, nome: 'Geovanny' },
    { id: 1003, nome: 'Thimoteo' }
  ];

  nomeAluno: string = 'Aluno não encontrado';

}
