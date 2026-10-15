import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario = '';
  senha = '';


fazerLogin(): void {
  if (this.usuario === 'admin' && this.senha === '1234') {
    localStorage.setItem('logado', 'true');
    alert('Login realizado com sucesso!');
    this.router.navigate(['/admin/dashboard']);
  } else {
    alert('Usuário ou senha incorretos!');
  }
}

fazerLogout(): void {
  localStorage.removeItem('logado');
  alert('Logout realizado com sucesso!');
}

constructor(private router: Router) {}
}
