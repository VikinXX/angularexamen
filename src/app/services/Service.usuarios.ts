import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ServiceUsuarios {

    nombre = signal(""); 
    email = signal("");

    constructor(private _http: HttpClient) {}

    login(email: string, password: string): Observable<any> {
        let login = {
            email: email,
            password: password
        }
        return this._http.post(environment.apiCubos + "api/Manage/Login", login);
    }

    getPedidos(): Observable<any> {
        return this._http.get(environment.apiCubos + "api/Compra/ComprasUsuario");
    }

    getPerfil(): Observable<any>{
        return this._http.get(environment.apiCubos + "api/Manage/PerfilUsuario");
    }

    setNombre(nombre: string): void {
        this.nombre.set(nombre);
    }

    setEmail(email: string): void {
        this.email.set(email);
    }

    reiniciarDatos(): void {
        this.nombre.set("");
        this.email.set("");
    }

}