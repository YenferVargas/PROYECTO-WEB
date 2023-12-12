import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { SharedModule } from '../../shared/shared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    
    CommonModule,
    NosotrosRoutingModule, // Asegúrate de que este módulo esté definido y configurado
    SharedModule, // Para usar componentes compartidos como <app-header> y <app-footer>
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule, // Si usas routerLink y otras directivas de enrutamiento
  ]
})
export class NosotrosModule { }
