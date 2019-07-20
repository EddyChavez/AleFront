import { Component, OnDestroy, Inject , OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from './../../_nav';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import {Encuesta, Usuario} from './default_layout';
import {EncuestasService} from '../../views/egresados/encuestas/encuestas.service';
import {UsuariosService} from '../../views/egresados/aplicacion-encuestas/usuarios.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent implements OnDestroy, OnInit {

    usuarios: Usuario[];

    usuario: Usuario = {
        name: null,
        ESTADO: null
    };

    encuestas: Encuesta[];
    encuesta: Encuesta = {
        NOMBRE: null
    };


  public loggedIn: boolean;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public navItems = navItems;


  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private usuariosService: UsuariosService,
    private encuestasService: EncuestasService,
    @Inject(DOCUMENT) _document?: any
  ) {

      this.getusuarios();
      this.getencuestas();

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  ngOnInit() {
    // this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    // console.log(rutasRoles);
    // navItems;
  }

    getusuarios() {
        this.usuariosService.get().subscribe((data: Usuario[]) => {
            this.usuarios = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error');
        });

    }

    abreModal(estado: number) {
        this.usuario = this.usuarios.find((m) => { return m.ESTADO == estado });
        if (estado === 1) {

        }
        console.log(this.usuario);
    }

    getencuestas() {
        this.encuestasService.get().subscribe((data: Encuesta[]) => {
            this.encuestas = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error');
        });
    }

    saveEncuesta() {

    }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
// export const rutasRoles2 = rutas;
