import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { EgresadosRoutingModule } from './egresados-routing.module';

// Component
import { AdministradorComponent} from './administrador/administrador.component';
import { ReportesComponent } from './reportes/reportes.component';
import { EncuestasComponent} from './encuestas/encuestas.component';
import { AdminCarruselComponent } from './admin-carrusel/admin-carrusel.component';
import { NoticiasCarruselComponent } from './noticias-carrusel/noticias-carrusel.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AltasComponent } from './encuestas/altas/altas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminReportesComponent } from './admin-reportes/admin-reportes.component';
import { HttpClientModule } from '@angular/common/http';
// import { DicotomicaComponent } from '../../components/tipos_preguntas/dicotomica/dicotomica.component';
import { Route, RouterModule } from '@angular/router';
import { AplicacionEncuestasComponent } from './aplicacion-encuestas/aplicacion-encuestas.component';
// import { PolitomicaComponent } from '../../components/tipos_preguntas/politomica/politomica.component';
// import { MixtaComponent } from '../../components/tipos_preguntas/mixta/mixta.component';
// import { EscalaNumericaComponent } from '../../components/tipos_preguntas/escala-numerica/escala-numerica.component';
// import { OpcionMultipleComponent } from '../../components/tipos_preguntas/opcion-multiple/opcion-multiple.component';

/*const routs: Route[] = [
    {path: 'dicotomica', component: DicotomicaComponent},
    {path: 'politomica', component: PolitomicaComponent},
    {path: 'mixta', component: MixtaComponent},
    {path: 'escala_numerica', component: EscalaNumericaComponent},
    {path: 'opcion_multiple', component: OpcionMultipleComponent},
];
*/
@NgModule({
  imports: [
    CommonModule,
    EgresadosRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routs)
  ],
  declarations: [
    EncuestasComponent,
    AdministradorComponent,
    ReportesComponent,
    AdminCarruselComponent,
    NoticiasCarruselComponent,
    AdminUsuariosComponent,
    SeccionesComponent,
    PreguntasComponent,
    EncuestaComponent,
    AltasComponent,
    AdminReportesComponent,
    AplicacionEncuestasComponent,
    // DicotomicaComponent,
    // PolitomicaComponent,
    // MixtaComponent,
    // EscalaNumericaComponent,
    // OpcionMultipleComponent
  ]
})
export class EgresadosModule { }
