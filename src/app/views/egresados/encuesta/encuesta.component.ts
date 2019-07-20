import { Component, OnInit } from '@angular/core';
import {EncuestasService} from '../encuestas/encuestas.service';
import {Encuesta, Pregunta, RespuestaPosible, Seccion} from '../encuestas/encuestas';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})

export class EncuestaComponent implements OnInit {
    public myModal;

    encuestas:  Encuesta[];
    encuesta:   Encuesta = {
        NOMBRE:         null,
        OBJETIVO:       null,
        INSTRUCCIONES:  null,
    };

    secciones: Seccion[];
    seccion: Seccion = {
        NUMERO_SECCION: null,
        NOMBRE_SECCION: null,
        OBJETIVO: null,
        INSTRUCCIONES: null
    };

    preguntas: Pregunta[];
    pregunta: Pregunta = {
        ORDEN: null,
        PLANTEAMIENTO: null,
        TEXTO_GUIA: null
    };

    respuestas: RespuestaPosible[];
    respuesta: RespuestaPosible = {
        FK_PREGUNTA: null,
        RESPUESTA: null
    };

    encuestaSelected = false;
    encuestaId = null;
    seccionSelected = false;
    jsonEncuesta = null;
    editing = false;

    constructor(private encuestasService: EncuestasService) {
          this.getEncuestas();
         // this.getPreguntas();
         // this.getseccioness();
    }

    ngOnInit() {
    }

    getEncuestas() {
            this.encuestasService.get().subscribe((data: Encuesta[]) => {
                this.encuestas = data;
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 1');
            });
    }

    llenaModal(pk_encuesta: number) {
            this.encuesta = this.encuestas.find((m) => m.PK_ENCUESTA === pk_encuesta);
            console.log(this.encuesta);
            this.editing = true;
    }

    abreEncuesta(pk_encuesta: number) {
            this.encuestasService.post(pk_encuesta).subscribe((data: Encuesta) => {
                this.encuesta = data;
                console.log(data);
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 2');
            });
            this.encuestaSelected = true;
            this.encuestaId = pk_encuesta;
    }

    mostrarSecciones(pk) {
            this.encuestasService.post(pk).subscribe((data) => {
                this.jsonEncuesta = data;
                console.log(data);
                try {
                    for (let i = 0; i < this.jsonEncuesta.encuesta.SECCIONES.length; i++) {

                    }
                } catch (e) {
                    console.log(e);
                }
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 2');
            });
    }

    limpiaModal() {
        this.encuesta = {
            NOMBRE: null,
            OBJETIVO: null,
            INSTRUCCIONES: null
        };
    }

    atras() {
        // tslint:disable-next-line:triple-equals
        if (this.seccionSelected == true) {
            this.seccionSelected = false;
            return null;
        }
    }
        /*getseccioness() {
            this.seccionesService.get().subscribe((data: Secciones[]) => {
                this.secciones = data;
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error');
            });
        }*/

        /*getPreguntas() {
            this.preguntasService.get().subscribe((data: Preguntas[]) => {
                this.preguntas = data;
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error');
            });
        }*/
}


