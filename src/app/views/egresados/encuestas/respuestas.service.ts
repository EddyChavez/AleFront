import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RespuestaPosible} from './encuestas';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

    API_ENDPOINT = 'http://127.0.0.1:8000/api';

  constructor(private  httpClient: HttpClient) { }

    get() {
        return this.httpClient.get(this.API_ENDPOINT + '/Respuesta_Posible');
    }

    save(respuesta: RespuestaPosible) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.post(this.API_ENDPOINT + '/Respuesta_Posible', respuesta,
            {headers: headers});
    }

    put(respuesta) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put(this.API_ENDPOINT + '/Respuesta_Posible/' + respuesta.PK_RESPUESTA_POSIBLE,
            respuesta, {headers: headers});
    }

    delete(PK_RESPUESTA) {
        return this.httpClient.delete(this.API_ENDPOINT + '/Respuesta_Posible/' + PK_RESPUESTA);
    }


}
