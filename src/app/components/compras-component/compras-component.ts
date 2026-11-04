import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceUsuarios } from '../../services/Service.usuarios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-compras-component',
  standalone: false,
  styleUrl: './compras-component.css',
  templateUrl: './compras-component.html',
})
export class ComprasComponent implements OnInit{

  public pedidos!: any[];

  constructor(private _service: ServiceUsuarios, private _cdr: ChangeDetectorRef) {}

  loadPedidos(): void {
    this._service.getPedidos().subscribe(res => {
      console.log(res);
      
      this.pedidos = res;
      this._cdr.detectChanges();
    })
  }

  descargarPdf(): void {
    const doc = new jsPDF();
    let y = 10; // Posición vertical inicial

    let headers = ["ID", "Pedido", "Usuario", "Fecha"]
    let data = this.pedidos.map(pedido => [pedido.idCubo, pedido.idPedido, pedido.idUsuario, pedido.fechaPedido]);
    
    autoTable(doc, {
      head: [headers],
      body: data,
      startY: y
    });

    doc.save('pedidos.pdf');
  }

  ngOnInit(): void {
    this.loadPedidos();
  }

}
