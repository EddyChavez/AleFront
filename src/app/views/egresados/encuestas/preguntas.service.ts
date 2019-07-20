import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pregunta} from '../preguntas/preguntas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

    API_ENDPOINT = 'http://127.0.0.1:8000/api';

    constructor(private  httpClient: HttpClient) { }

    get() {
        return this.httpClient.get(this.API_ENDPOINT + '/Pregunta');
    }

    save(pregunta: Pregunta) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.post(this.API_ENDPOINT + '/Pregunta', pregunta, {headers: headers});
    }

    put(pregunta) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put(this.API_ENDPOINT + '/Pregunta/' + pregunta.PK_PREGUNTA, pregunta, {headers: headers});
    }

    delete(PK_PREGUNTA) {
        return this.httpClient.delete(this.API_ENDPOINT + '/Pregunta/' + PK_PREGUNTA);
    }
}
