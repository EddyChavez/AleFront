import { Component, OnInit } from '@angular/core';
import {Pregunta, Seccion} from './preguntas';
import {PreguntasService} from '../encuestas/preguntas.service';
import {Tipos_preguntas} from '../../../components/tipos_preguntas/tipos_preguntas';
import {Encuesta} from '../encuestas/encuestas';
import {SeccionesService} from '../encuestas/secciones.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

    selecciono_pregunta: boolean;
    // tipo_pregunta = pregunta;
   /* selectipo: string;
    tipo_pregunta: any [] = [
        {tipo: 'uno', nombre: 'dicotomica' },
        {tipo: 'dos', nombre: 'politomica'},
        {tipo: 'dos', nombre: 'politomica'},
        {tipo: 'dos', nombre: 'politomica'},
        {tipo: 'dos', nombre: 'politomica'},
        {tipo: 'dos', nombre: 'politomica'},
    ];
*/

    secciones: Seccion[];

    seccion: Seccion = {
        NUMERO_SECCION: null,
        NOMBRE_SECCION: null,
        OBJETIVO: null,
        INSTRUCCIONES: null
    }

    preguntas: Pregunta[];

    pregunta: Pregunta = {
        ORDEN: null,
        PLANTEAMIENTO: null,
        TEXTO_GUIA: null
    };

    editing = false;
    tipo_pregunta: number;
    tipo_respuesta: number;

    constructor(private preguntasService: PreguntasService, private seccionesService: SeccionesService) {
        this.getPreguntas();
        // this.getseccioness();
        this.selecciono_pregunta = false;
        this.tipo_pregunta = 0;
        this.tipo_respuesta = 0;
    }

    choice(tipo) {
        this.tipo_pregunta = tipo;
        switch (tipo) {
            case (0): {
                this.tipo_respuesta = 0;
            }
            break;
            case (1): {
                this.tipo_respuesta = 1;
            }
                break;
            case (2): {
                this.tipo_respuesta = 2;
            }
                break;
            case (3): {
                this.tipo_respuesta = 3;
            }
                break;
            case (4): {
                this.tipo_respuesta = 4;
            }
                break;
            case (5): {
                this.tipo_respuesta = 5;
            }
                break;
            default: {
            }
                break;
        }
    }

  ngOnInit() {
  }

  seleccionoPregunta(pregunta: number) {
        this.tipo_pregunta = pregunta;

         this.selecciono_pregunta = true;
   }

 /*  getseccioness() {
       this.seccionesService.get().subscribe((data: Secciones[]) => {
           this.secciones = data;
       }, (error) => {
           console.log(error);
           alert('Ha ocurrido un error');
       });
   }
*/
  getPreguntas() {
      this.preguntasService.get().subscribe((data: Pregunta[]) => {
          this.preguntas = data;
      }, (error) => {
          console.log(error);
          alert('Ha ocurrido un error');
      });
  }

  /*llenaModal(pk_pregunta: number) {
        this.pregunta = this.preguntas.find((m) => { return m.PK_PREGUNTA == pk_pregunta });
        console.log(this.pregunta);
        this.editing = true;
    }*/

  /*escogetipo(PK_TIPO_PREGUNTA: number) {
        this.tipo = this.tipo.find((m) => { return m.PK_TIPO_PREGUNTA == PK_TIPO_PREGUNTA });
        console.log(this.pregunta);
    }
*/

  limpiaModal() {
        this.pregunta = {
            ORDEN: null,
            PLANTEAMIENTO: null,
            TEXTO_GUIA: null
        };
    }

  savePregunta() {
        if (this.editing) {
            this.preguntasService.put(this.pregunta).subscribe((data) => {
                alert('Los campos de la pregunta han sido actualizados');
                console.log(data);
                this.getPreguntas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error');
            });
        } else {
            this.preguntasService.save(this.pregunta).subscribe((data) => {
                alert('La pregunta ha sido guardada');
                console.log(data);
                this.getPreguntas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error');
            });
        }
    }

    delete(PK_PREGUNTA) {
        if (confirm('¿Estás seguro de que quieres eliminar esta pregunta?')) {
            this.preguntasService.delete(PK_PREGUNTA).subscribe((data) => {
                alert('Encuesta eliminada correctamente');
                console.log(data);
                this.getPreguntas();
            }, (error) => {
                console.log(error);
            });
        }
    }
}
