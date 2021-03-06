import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SistemsComponent } from './sistems/sistems.component';

// login
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
// @ts-ignore
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EstadoCivilService } from './components/formulario/estado-civil.service';
import { DependenciaService } from './components/formulario/dependencia.service';
import { PropagandaTecnologicoService } from './components/formulario/propaganda-tecnologico.service';
import { IncapacidadService } from './components/formulario/incapacidad.service';
import { CarreraService } from './components/formulario/carrera.service';
import { EntidadFederativaService } from './components/formulario/entidad-federativa.service';
import { CiudadService } from './components/formulario/ciudad.service';
import { ControlComponent } from './components/control/control.component';
import { StudentOldComponent } from './components/student-old/student-old.component';
import { NavbarSistemsComponent } from './components/navbar-sistems/navbar-sistems.component';
import { ReactiveFormsModule } from '@angular/forms';
import {DocumentacionComponent} from './views/residencias/documentacion/documentacion.component';
import { DicotomicaComponent } from './components/tipos_preguntas/dicotomica/dicotomica.component';
import { PolitomicaComponent } from './components/tipos_preguntas/politomica/politomica.component';
import { MixtaComponent } from './components/tipos_preguntas/mixta/mixta.component';
import { EscalaNumericaComponent } from './components/tipos_preguntas/escala-numerica/escala-numerica.component';
import { OpcionMultipleComponent } from './components/tipos_preguntas/opcion-multiple/opcion-multiple.component';
import {Route, RouterModule} from '@angular/router';

/*const routs: Route [] = [
    {path: 'dicotomica', component: DicotomicaComponent},
    {path: 'politomica', component: PolitomicaComponent},
    {path: 'mixta', component: MixtaComponent},
    {path: 'escala_numerica', component: EscalaNumericaComponent},
    {path: 'opcion_multiple', component: OpcionMultipleComponent},
];*/

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    // SnotifyModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    // RouterModule.forRoot(routs)
    ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    // SignupComponent,
    RegisterComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SistemsComponent,
    FormularioComponent,
    ControlComponent,
    StudentOldComponent,
    NavbarSistemsComponent,
    // DicotomicaComponent,
    // PolitomicaComponent,
    // MixtaComponent,
    // EscalaNumericaComponent,
    // OpcionMultipleComponent,
  ],
  providers: [
    EstadoCivilService,
    DependenciaService,
    PropagandaTecnologicoService,
    IncapacidadService,
    CarreraService,
    EntidadFederativaService,
    CiudadService,

    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    },
    JarwisService,
    TokenService,
    AuthService,
    AfterLoginService,
    BeforeLoginService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
