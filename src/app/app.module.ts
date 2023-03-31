import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Consumir servicios
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para subir fotos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes de angular material
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


// Componentes de la app
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AddProductosComponent } from './components/productos/add-productos/add-productos.component';
import { PaisesComponent } from './components/paises/paises.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';

// services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// pipes
import { TranslatePipe } from './pipes/translate.pipe';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FilterproductoPipe } from './pipes/filterproducto.pipe';
import { SortDirective } from './directives/sort.directive';
import { AddPaisesComponent } from './components/paises/add-paises/add-paises.component';
import { AddCiudadesComponent } from './components/ciudades/add-ciudades/add-ciudades.component';
import { FilterpaisPipe } from './pipes/filterpais.pipe';
import { FilterciudadPipe } from './pipes/filterciudad.pipe';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { AddPedidosComponent } from './components/pedidos/add-pedidos/add-pedidos.component';


// Creamos funcion de translate y abajo de config
// esta de translate me va a ayudar a traduccir
export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

// Funcion de config
// esta funcion me va a ayudar a configurar
export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProductosComponent,
    AddProductosComponent,
    TranslatePipe,
    PaisesComponent,
    CiudadesComponent,
    ClientesComponent,
    FilterproductoPipe,
    SortDirective,
    AddPaisesComponent,
    AddCiudadesComponent,
    FilterpaisPipe,
    FilterciudadPipe,
    PedidosComponent,
    AddPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
