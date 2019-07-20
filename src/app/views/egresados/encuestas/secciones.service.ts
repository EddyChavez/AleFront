import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Encuesta, Seccion} from './encuestas';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

    API_ENDPOINT = 'http://127.0.0.1:8000/api';

    constructor(private  httpClient: HttpClient) { }

   /* get(seccion) {
        return this.httpClient.get(this.API_ENDPOINT + '/getSecciones' + seccion.FK_ENCUESTA);
    }*/

    get(seccion) {
        return this.httpClient.get(this.API_ENDPOINT + '/Seccion_Encuesta/' + seccion.FK_ENCUESTA);
    }

    save(seccion: Seccion) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.post(this.API_ENDPOINT + '/Seccion_Encuesta', seccion,
            {headers: headers});
    }

    put(seccion) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put(this.API_ENDPOINT + '/Seccion_Encuesta/' + seccion.PK_SECCION,
            seccion, {headers: headers});
    }

    delete(PK_SECCION) {
        return this.httpClient.delete(this.API_ENDPOINT + '/Seccion_Encuesta/' + PK_SECCION);
    }
}
