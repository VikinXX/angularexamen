import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/Service.cubos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marca-component',
  standalone: false,
  styleUrl: './marca-component.css',
  templateUrl: './marca-component.html',
})
export class MarcaComponent implements OnInit{

  public cubos!: Cubo[];
  public marca!: string;
  public token: string | null = sessionStorage.getItem("token");

  constructor(private _service: ServiceCubos, private _cdr: ChangeDetectorRef, private _activate: ActivatedRoute) {}

  loadCubosPorMarca(): void {
    this._activate.params.subscribe(params => {
      this.marca = params['marca'];
      this._service.getCubosPorMarca(params['marca']).subscribe(res => {
        this.cubos = res;
        this._cdr.detectChanges();
      })
    })
  }

  insertarPedido(idCubo: number): void{
    this._service.insertarPedido(idCubo).subscribe((res: any) => {
      this._cdr.detectChanges();
    })
  }

  ngOnInit(): void {
    this.loadCubosPorMarca();
    
  }

}
