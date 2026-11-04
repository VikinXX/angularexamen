import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpContext } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable({
    providedIn: 'root'
})
export class ServiceCubos {

    constructor(private _http: HttpClient) {}

    getMarcas(): Observable<any> {
        let context = new HttpContext().set(SKIP_TOKEN, true);
        return this._http.get(environment.apiCubos + "api/Cubos/Marcas", { context: context });
    }

    getCubosPorMarca(marca: string): Observable<any> {
        let context = new HttpContext().set(SKIP_TOKEN, true);
        return this._http.get(environment.apiCubos + "api/Cubos/CubosMarca/" + marca, { context: context });
    }

    insertarPedido(idCubo: number): Observable<any> {
        let headers = { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") };
        return this._http.post(environment.apiCubos + "api/Compra/InsertarPedido/" + idCubo, {});
    }
}