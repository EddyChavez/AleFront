import { Component, OnInit, AfterContentInit } from '@angular/core';
import { EncuestasService } from './encuestas.service';
import {Encuesta, Pregunta, RespuestaPosible, Seccion, TipoPregunta} from './encuestas';
import {log} from 'util';
import {SeccionesService} from './secciones.service';
import {load} from '@angular/core/src/render3';
import {PreguntasService} from './preguntas.service';
import {RespuestasService} from './respuestas.service';
// import $ from 'jquery/dist/jquery';
// import * as $ from 'jquery';
declare var $: any;

// import {tryCatch} from "rxjs/internal-compatibility";
// import {post} from "selenium-webdriver/http";

@Component({
    selector: 'app-encuestas',
    templateUrl: './encuestas.component.html',
    styleUrls: ['./encuestas.component.scss']
})

export class EncuestasComponent implements OnInit {
    public myModal;

    encuestas:  Encuesta[];
    encuesta:   Encuesta = {
        PK_ENCUESTA: null,
        NOMBRE:         null,
        OBJETIVO:       null,
        INSTRUCCIONES:  null,
        SECCIONES: null
    };

    secciones:  Seccion[];
    seccion:    Seccion = {
        FK_ENCUESTA: null,
        NUMERO_SECCION: null,
        NOMBRE_SECCION: null,
        OBJETIVO:       null,
        INSTRUCCIONES:  null,
        PREGUNTAS: null
    };

    preguntas: Pregunta[];
    pregunta: Pregunta = {
        FK_SECCION: null,
        ORDEN: null,
        PLANTEAMIENTO: null,
        TEXTO_GUIA: null,
        FK_TIPO_PREGUNTA: null,
        RESPUESTAS: null
    };

    tiposPreguntas: TipoPregunta[];
    tipoPregunta: TipoPregunta = {
        PK_TIPO_PREGUNTA: null,
        NOMBRE_TIPO_PREGUNTA: null
    };

    respuestas: RespuestaPosible[];
    respuesta: RespuestaPosible = {
        FK_PREGUNTA: null,
        RESPUESTA: null
    };

    /*public Tipos: TipoPregunta[
        {PK_TIPO_PREGUNTA: 1, NOMBRE_TIPO_PREGUNTA: 'DICOTOMICA'},
    ];*/

    encuestaSelected = false;
    seccionSelected = false;
    preguntaSelected = false;
    respuestaSelected = false;
    encuestaId = null;
    seccionId = null;
    preguntaId = null;
    respuestaId = null;
    jsonEncuesta = null;
    respt = false;

    constructor(private encuestasService: EncuestasService, private seccionesService: SeccionesService,
                private preguntasService: PreguntasService, private respuestasService: RespuestasService) {
        this.getEncuestas();
    }

    ngOnInit() { }

   /* makeSortable() {
        $('.sorteable').sortable();
        //   $('.sorteable').disableSelection();
    }*/

   /********************************ENCUESTA********************************/
    getEncuestas() {
        this.encuestasService.get().subscribe((data: Encuesta[]) => {
            this.encuestas = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 1');
        });
    }

    abreEncuesta(pk_encuesta: number) {
        this.encuestasService.post(pk_encuesta).subscribe((data: Encuesta) => {
            this.encuesta = data;
            this.jsonEncuesta = data;
            console.log(data);
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 2');
        });
        this.encuestaSelected = true;
        this.encuestaId = pk_encuesta;
    }

    limpiaEncuesta() {
        this.encuesta = {
            NOMBRE: null,
            OBJETIVO: null,
            INSTRUCCIONES: null
        };
    }

    saveEncuesta() {
        this.encuesta.PK_ENCUESTA = this.encuestaId;
        this.encuestasService.save(this.encuesta).subscribe((data) => {
            alert('El nombre de la encuesta ha sido guardada');
            console.log(data);
            this.getEncuestas();
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 4');
        });
    }

    editarEncuesta() {
        this.encuesta.NOMBRE = (document.getElementById('nombreEncuesta') as HTMLInputElement).value;
        this.encuesta.OBJETIVO = (document.getElementById('objetivoEncuesta') as HTMLInputElement).value;
        this.encuesta.INSTRUCCIONES = (document.getElementById('instrucEncuesta') as HTMLInputElement).value
        this.encuesta.PK_ENCUESTA = this.encuestaId;
            this.encuestasService.put(this.encuesta).subscribe((data) => {
                alert('Los campos de la encuesta han sido actualizados');
                console.log(data);
                this.getEncuestas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 3');
            });
    }

    deleteEncuesta(PK_ENCUESTA) {
        if (confirm('¿Estás seguro de que quieres eliminar esta encuesta?')) {
            this.encuestasService.delete(PK_ENCUESTA).subscribe((data) => {
                alert('Encuesta eliminada correctamente');
                console.log(data);
                this.getEncuestas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 5');
            });
        }
    }

    /********************************SECCION********************************/
   /*actualizar(): void {
        this.atras().window.location.reload();
      //  setInterval('actualizar()', 4000);
    }*/

    getSecciones() {
        this.seccion.FK_ENCUESTA = this.encuestaId;
        this.seccion.PK_SECCION = this.seccionId;
        this.seccionesService.get(this.seccion).subscribe((data: Seccion[]) => {
            this.secciones = data;
            console.log(data);
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 6');
        });
    }

    getSeccion(pk) {
        try {
            for (const aux in this.jsonEncuesta.encuesta.SECCIONES) {
                for (const seccion in this.jsonEncuesta.encuesta.SECCIONES[aux]) {
                    if (this.jsonEncuesta.encuesta.SECCIONES[aux]['PK_SECCION'] === pk) {
                        return this.jsonEncuesta.encuesta.SECCIONES[aux];
                    }
                }
            }
        } catch (e) {
            console.log(e);
            alert('Ha ocurrido un error 7');
        }
    }

    abreSeccion(PK_SECCION) {
        this.seccionSelected = true;
        this.seccionId = PK_SECCION;
    }

    limpiaSeccion() {
        this.seccion = {
            NOMBRE_SECCION: null,
            NUMERO_SECCION: null,
            OBJETIVO: null,
            INSTRUCCIONES: null
        };
    }

    saveSeccion() {
            this.seccion.FK_ENCUESTA = this.encuestaId
            this.seccionesService.save(this.seccion).subscribe((data) => {
                alert('La sección ha sido guardada');
                console.log(data);
                this.getSecciones();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 8');
            });
    }

    editarSeccion() {
        this.seccion.FK_ENCUESTA = this.encuestaId
        // termina
        this.seccion.PK_SECCION = this.seccionId;
        this.seccion.NUMERO_SECCION = (document.getElementById('numeroSeccion') as HTMLInputElement).valueAsNumber;
        this.seccion.NOMBRE_SECCION = (document.getElementById('nombreSeccion') as HTMLInputElement).value;
        this.seccion.OBJETIVO = (document.getElementById('objetivoSeccion') as HTMLInputElement).value;
        this.seccion.INSTRUCCIONES = (document.getElementById('instrucSeccion') as HTMLInputElement).value;
        this.seccionesService.put(this.seccion).subscribe((data) => {
            alert('Los campos de la sección han sido actualizados');
            // console.log(data);
            this.getSecciones();
            console.log(this.getSecciones());
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 9');
        });
    }

    deleteSeccion(PK_SECCION) {
        if (confirm('¿Estás seguro de que quieres eliminar esta sección?')) {
            this.seccionesService.delete(PK_SECCION).subscribe((data) => {
                alert('Sección eliminada correctamente');
                console.log(data);
                this.getSecciones();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 10');
            });
        }
    }

    /********************************PREGUNTA********************************/

    /*getPreguntas() {
        this.pregunta.FK_SECCION = this.seccionId;
        this.pregunta.PK_PREGUNTA = this.preguntaId;
        this.preguntasService.get(this.pregunta).subscribe((data: Pregunta[]) => {
            this.preguntas = data;
            console.log(data);
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 11');
        });
    }*/

    getPregunta(pk_PRE) {
       console.log(this.getSeccion(this.seccionId));
        try {
            for (const aux in this.getSeccion(this.seccionId)['PREGUNTAS']) {
                console.log(this.getSeccion(this.seccionId)['PREGUNTAS']);
                if (this.getSeccion(this.seccionId)['PREGUNTAS'][aux]['PK_PREGUNTA'] == pk_PRE) {
                    console.log(this.getSeccion(this.seccionId)['PREGUNTAS'][aux]);
                    return this.getSeccion(this.seccionId)['PREGUNTAS'][aux];
                }
            }
        } catch (e) {
            console.log(e);
            alert('Ha ocurrido un error 12');
        }
    }

    abrePregunta(PK_PREGUNTA) {
        this.preguntaSelected = true;
        console.log(PK_PREGUNTA);
        this.preguntaId = PK_PREGUNTA;
    }

    limpiaPregunta() {
        this.pregunta = {
            ORDEN: null,
            PLANTEAMIENTO: null,
            TEXTO_GUIA: null,
            RESPUESTAS: null,
            FK_TIPO_PREGUNTA: null
        };
    }

    savePregunta() {
        this.pregunta.FK_SECCION = this.seccionId
        this.preguntasService.save(this.pregunta).subscribe((data) => {
            alert('La pregunta ha sido guardada');
            console.log(data);
            // this.getPreguntas();
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 13');
        });
    }

    editarPregunta() {
        this.pregunta.FK_SECCION = this.seccionId
        // termina
        this.pregunta.PK_PREGUNTA = this.preguntaId;
        this.pregunta.NOMBRE_TIPO_PREGUNTA = (document.getElementById('tipoPregunta') as HTMLInputElement).value;
        this.pregunta.ORDEN = (document.getElementById('num') as HTMLInputElement).valueAsNumber;
        this.pregunta.PLANTEAMIENTO = (document.getElementById('plantea') as HTMLInputElement).value;
        this.pregunta.TEXTO_GUIA = (document.getElementById('texto') as HTMLInputElement).value;
        this.preguntasService.put(this.pregunta).subscribe((data) => {
            alert('Los campos de la pregunta han sido actualizados');
            // console.log(data);
            // this.getPreguntas();
          // console.log(this.getSecciones());
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 14');
        });
    }

    deletePregunta(PK_PREGUNTA) {
        if (confirm('¿Estás seguro de que quieres eliminar esta pregunta?')) {
            this.preguntasService.delete(PK_PREGUNTA).subscribe((data) => {
                alert('Pregunta eliminada correctamente');
                console.log(data);
                // this.getPreguntas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 15');
            });
        }
    }
    /********************************RESPUESTA********************************/

   /* getRespuestas() {
        this.respuesta.FK_PREGUNTA = this.preguntaId;
        this.respuesta.PK_RESPUESTA_POSIBLE = this.respuestaId;
        this.respuestasService.get(this.respuesta).subscribe((data: RespuestaPosible[]) => {
            this.respuestas = data;
            console.log(data);
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 16');
        });
    }*/

    getRespuesta(pk_res) {
            try {
                for (const aux in this.getPregunta(this.preguntaId)['RESPUESTAS']) {
                    console.log(this.getPregunta(this.preguntaId)['RESPUESTAS']);
                    // tslint:disable-next-line:triple-equals max-line-length
                    if (this.getPregunta(this.preguntaId)['RESPUESTAS'][aux]['PK_RESPUESTA_POSIBLE'] == pk_res) {
                        return this.getPregunta(this.preguntaId)['RESPUESTAS'][aux];
                    }
                }
            } catch (e) {
                console.log(e);
                alert('Ha ocurrido un error 17');
            }
    }

    abreRespuesta(PK_RESPUESTA_POSIBLE) {
       // this.respuestaSelected = true;
        this.respuestaId = PK_RESPUESTA_POSIBLE;
        this.respt = true;
        if (this.respt == true) {
            return null;
        } else if (this.atras()) {
            this.respt = false;
        }
    }

    limpiaRespuesta() {
        this.respuesta = {
            RESPUESTA: null
        };
    }

    saveRespuesta() {
        this.respuesta.FK_PREGUNTA = this.preguntaId
        this.respuestasService.save(this.respuesta).subscribe((data) => {
            alert('La respuesta ha sido guardada');
            console.log(data);
            // this.getPreguntas();
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 18');
        });
    }

    editarRespuesta() {
        this.respuesta.FK_PREGUNTA = this.preguntaId
        // termina
        this.respuesta.PK_RESPUESTA_POSIBLE = this.respuestaId;
        this.respuesta.RESPUESTA = (document.getElementById('resp') as HTMLInputElement).value;
        this.respuestasService.put(this.respuesta).subscribe((data) => {
            alert('La respuesta ha sido actualizada');
            // console.log(data);
            // this.getPreguntas();
            // console.log(this.getSecciones());
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error 19');
        });
    }

    deleteRespuesta(PK_RESPUESTA) {
        if (confirm('¿Estás seguro de que quieres eliminar esta respuesta?')) {
            this.respuestasService.delete(PK_RESPUESTA).subscribe((data) => {
                alert('Respuesta eliminada correctamente');
                console.log(data);
                // this.getPreguntas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 20');
            });
        }
    }

    /********************************DETALLES********************************/

    atras() {
        // tslint:disable-next-line:triple-equals
        if (this.respuestaSelected == true) {
            this.respuestaSelected = false;
            return null;
        } else if (this.preguntaSelected == true) {
            this.preguntaSelected = false;
            return null;
            // tslint:disable-next-line:triple-equals
        } else if (this.seccionSelected == true) {
            this.seccionSelected = false;
            return null;
            // tslint:disable-next-line:triple-equals
        } else if (this.encuestaSelected == true) {
            this.encuestaSelected = false;
        }
    }

    /*atras() {
        // tslint:disable-next-line:triple-equals
        if (this.respuestaSelected == true) {
            this.respuestaSelected = false;
            return null;
        } else if (this.preguntaSelected == true) {
            this.preguntaSelected = false;
            return null;
            // tslint:disable-next-line:triple-equals
        } else if (this.seccionSelected == true) {
            this.seccionSelected = false;
            return null;
            // tslint:disable-next-line:triple-equals
        } else if (this.encuestaSelected == true) {
            this.encuestaSelected = false;
        }
    }*/
}


/* llenaEncuesta(pk_encuesta: number) {
       this.encuesta = this.encuestas.find((m) => m.PK_ENCUESTA == pk_encuesta);
       console.log(this.encuesta);
       // this.editing = true;
   }*/


/* saveEncuesta() {
        if (this.editingEncuesta) {
            /*this.encuesta.NOMBRE = document.getElementById('nombreEncuesta').value;
            this.encuesta.OBJETIVO = document.getElementById('objetivoEncuesta').value;
            this.encuesta.INSTRUCCIONES = document.getElementById('instrucEncuesta').value;
            this.encuesta.PK_ENCUESTA = this.encuestaId;
            this.encuestasService.put(this.encuesta).subscribe((data) => {
                alert('Los campos de la encuesta han sido actualizados');
                console.log(data);
                // this.getEncuestas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 3');
            });
        } else {
            this.encuesta.PK_ENCUESTA = this.encuestaId;
            this.encuestasService.save(this.encuesta).subscribe((data) => {
                alert('El nombre de la encuesta ha sido guardada');
                console.log(data);
                this.getEncuestas();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error 4');
            });
        }
}*/

/*
deleteJSONSeccion(pk) {
      try {
          for (const aux in this.jsonEncuesta.encuesta.SECCIONES) {
              for (const seccion in this.jsonEncuesta.encuesta.SECCIONES[aux]) {
                  // tslint:disable-next-line:triple-equals max-line-length
                  if (this.jsonEncuesta.encuesta.SECCIONES[aux]['PK_SECCION'] === pk) {
                      delete this.jsonEncuesta.encuesta.SECCIONES[aux];
                  }
              }
          }
      } catch (e) {
          console.log(e);
          alert('Ha ocurrido un error 7.1');
      }
  }
  */


