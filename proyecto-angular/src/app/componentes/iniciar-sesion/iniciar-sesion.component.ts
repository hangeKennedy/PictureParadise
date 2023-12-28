import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  nombreUsuario: string = '';
  clave: string = '';
  errorMensaje: string = '';

  constructor(private router: Router) { }

  iniciarSesion() {
    // Aquí se agraga la lógica de autenticación
    if (this.nombreUsuario === 'usuario' && this.clave === 'clave') {
      // Autenticación exitosa
      this.router.navigate(['/list-images']);
    } else {
      this.errorMensaje = 'Credenciales incorrectas, intentalo de nuevo!';
    }
  }
}
