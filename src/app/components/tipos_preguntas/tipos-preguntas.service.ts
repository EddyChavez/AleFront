import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiposPreguntasService {

    API_ENDPOINT = 'http://127.0.0.1:8000/api';

    constructor(private  httpClient: HttpClient) { }

    get() {
        return this.httpClient.get(this.API_ENDPOINT + '/Tipo_Pregunta');
    }
}
