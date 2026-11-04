import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MarcaComponent } from './components/marca-component/marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { AuthGuard } from './guards/guards-auth-guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Login", component: LoginComponent },
  { path: "Compras", component: ComprasComponent, canActivate: [AuthGuard] },
  { path: "Perfil", component: PerfilComponent, canActivate: [AuthGuard] },
  { path: "Marca/:marca", component: MarcaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
