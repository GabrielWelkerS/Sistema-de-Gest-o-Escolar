import { Routes } from '@angular/router';
import { Alunos } from './pages/alunos/alunos';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path: 'alunos/:id', component: Alunos},
    {path: 'alunos', component: Alunos},
    {path: 'login', component: Login},
    {path: '', redirectTo: 'alunos', pathMatch: 'full'}
];
