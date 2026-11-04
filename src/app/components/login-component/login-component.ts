import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUsuarios } from '../../services/Service.usuarios';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  @ViewChild('email') email: any;
  @ViewChild('password') password: any;

  constructor(private _router: Router, private _service: ServiceUsuarios) {}

  login(){
    this._service.login(this.email.nativeElement.value, this.password.nativeElement.value).subscribe(res => {
      sessionStorage.setItem("token", res.response);
      this._service.getPerfil().subscribe(res => {
        this._service.setNombre(res.nombre);
        this._service.setEmail(res.email);
      })
      this._router.navigate(['/']);
    })
  }

}
