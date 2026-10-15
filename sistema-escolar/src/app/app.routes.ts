import { Routes } from '@angular/router';
import { Alunos } from './pages/alunos/alunos';
import { Login } from './pages/login/login';
import { DetalhesAluno } from './pages/detalhes-aluno/detalhes-aluno';
import { Admin } from './pages/admin/admin';
import { Component } from '@angular/core';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { Configuracoes } from './pages/admin/configuracoes/configuracoes';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
    {path: 'alunos/:id', component: DetalhesAluno},
    {path: 'alunos', component: Alunos},
    {path: 'login', component: Login},
    {path: '', redirectTo: 'alunos', pathMatch: 'full'},
    {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
    children: [
        { path: 'dashboard', component: Dashboard},
        { path: 'configuracoes', component: Configuracoes }
    ]
    },

];
