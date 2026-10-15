import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesAluno } from './detalhes-aluno';

describe('DetalhesAluno', () => {
  let component: DetalhesAluno;
  let fixture: ComponentFixture<DetalhesAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
