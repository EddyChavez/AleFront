import { Component, OnInit } from '@angular/core';
import {EncuestasService} from '../encuestas/encuestas.service';
import {Usuario} from './aplicacion_encuestas';
import {UsuariosService} from './usuarios.service';
import {Encuesta} from '../encuestas/encuestas';

@Component({
  selector: 'app-aplicacion-encuestas',
  templateUrl: './aplicacion-encuestas.component.html',
  styleUrls: ['./aplicacion-encuestas.component.scss']
})
export class AplicacionEncuestasComponent implements OnInit {
    usuarios: Usuario[];

    usuario: Usuario = {
        name: null,
    };

    encuestas: Encuesta[];
    encuesta: Encuesta = {
        NOMBRE: null
    };


    constructor(private usuariosService: UsuariosService, private encuestasService: EncuestasService ) {
        this.getusuarios();

        this.getencuestas();
    }

    ngOnInit() {
    }

    getusuarios() {
        this.usuariosService.get().subscribe((data: Usuario[]) => {
            this.usuarios = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error');
        });

    }

    getencuestas() {
        this.encuestasService.get().subscribe((data: Encuesta[]) => {
            this.encuestas = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error');
        });
    }

    aplicaEncuesta() {

    }
}




