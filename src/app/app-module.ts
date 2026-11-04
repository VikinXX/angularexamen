import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HomeComponent } from './components/home-component/home-component';
import { MarcaComponent } from './components/marca-component/marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { tokenInterceptor } from './interceptors/token-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    MarcaComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptors([tokenInterceptor]))],
  bootstrap: [App],
})
export class AppModule {}
