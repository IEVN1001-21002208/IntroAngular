import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
})
export class Login {
  usuario: string = '';
  contrasenia: string = '';
  mensaje: string = '';

  usuarioCorrecto: string = 'admin';
  contraCorrecta: string = '12345';

  validar(usuario: string, contrasenia: string): void {
    let msg = '';

    if (usuario !== this.usuarioCorrecto) {
      msg = 'El nombre de usuario es incorrecto.';
    } else if (contrasenia !== this.contraCorrecta) {
      msg = 'La contraseña es incorrecta.';
    } else {
      msg = 'Bienvenido, ' + usuario + '.';
    }

    this.mensaje = msg;
  }
}