import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/Service.cubos';
import { Router } from '@angular/router';
import { ServiceUsuarios } from '../../services/Service.usuarios';
import { inject } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent  implements OnInit{

  public marcas!: string[];
  public brandsOpen = false;
  private _serviceUsuarios: ServiceUsuarios = inject(ServiceUsuarios);
  public nombre = this._serviceUsuarios.nombre;

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceCubos, private _router: Router) {}

  loadMarcas(): void {
    this._service.getMarcas().subscribe(res => {
      this.marcas = res;
      this._cdr.detectChanges();
    })
  }

  logout(): void {
    sessionStorage.removeItem("token");
    this._serviceUsuarios.reiniciarDatos();
    this._router.navigate(["/"]);
  }

  toggleBrands(): void {
    this.brandsOpen = !this.brandsOpen;
  }

  ngOnInit(): void {
    this.loadMarcas();
  }

}
