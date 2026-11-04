import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceUsuarios } from '../../services/Service.usuarios';
import { User } from '../../models/User';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {

  public user!: User[];

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceUsuarios) {}

  loadPerfil(): void {
    this._service.getPerfil().subscribe((res: any) => {
      this.user = res;
      this._cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.loadPerfil();
  }
}
