import {Component, OnInit, SecurityContext} from '@angular/core';
import {Seccion} from './secciones';
import {SeccionesService} from '../encuestas/secciones.service';
import {Encuesta} from '../encuestas/encuestas';
import {EncuestasService} from '../encuestas/encuestas.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {

    editing = false;

    secciones: Seccion[];

    encuestas: Encuesta[];
    encuesta: Encuesta = {
        NOMBRE: null
    };

    seccion: Seccion = {

        NUMERO_SECCION: null,
        NOMBRE_SECCION: null,
        OBJETIVO: null,
        INSTRUCCIONES: null
    };

    constructor(private seccionesService: SeccionesService, private encuestasService: EncuestasService) {
        // this.getSecciones();
        this.getencuestas();
    }

    ngOnInit() {
    }

    getencuestas() {
        this.encuestasService.get().subscribe((data: Encuesta[]) => {
            this.encuestas = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error');
        });
    }

    /*getSecciones() {
        this.seccionesService.get().subscribe((data: Secciones[]) => {
            this.encuestas = data;
        }, (error) => {
            console.log(error);
            alert('Ha ocurrido un error');
        });
    }*/

    /*llenaModal(pk_seccion: number) {
        this.seccion = this.secciones.find((m) => { return m.PK_SECCION == pk_seccion });
        console.log(this.seccion);
        this.editing = true;
    }*/

    limpiaModal() {
        this.seccion = {
            NUMERO_SECCION: null,
            NOMBRE_SECCION: null,
            OBJETIVO: null,
            INSTRUCCIONES: null
        };
    }

    saveSeccion() {
        if (this.editing) {
            this.seccionesService.put(this.seccion).subscribe((data) => {
                alert('Los campos de la sección han sido actualizados');
                console.log(data);
                // this.getSecciones();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error');
            });
        } else {
            this.seccionesService.save(this.seccion).subscribe((data) => {
                alert('La sección ha sido guardada');
                console.log(data);
              //  this.getSecciones();
            }, (error) => {
                console.log(error);
                alert('Ha ocurrido un error');
            });
        }
    }

    delete(PK_SECCION) {
        if (confirm('¿Estás seguro de que quieres eliminar esta sección?')) {
            this.seccionesService.delete(PK_SECCION).subscribe((data) => {
                alert('Sección eliminada correctamente');
                console.log(data);
             //   this.getSecciones();
            }, (error) => {
                console.log(error);
            });
        }
    }

}
