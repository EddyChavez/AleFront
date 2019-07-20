import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Encuesta} from './encuestas';

@Injectable({
    providedIn: 'root'
})
export class EncuestasService {

    API_ENDPOINT = 'http://127.0.0.1:8000/api';

    constructor(private  httpClient: HttpClient) {}

    post(id): Observable<Encuesta> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = {'id_encuesta': id};
        return this.httpClient.post(this.API_ENDPOINT + '/getAllEncuesta', body, {
            headers: headers});
    }

    get() {
        return this.httpClient.get(this.API_ENDPOINT + '/Encuestas');
    }

    save(encuesta: Encuesta) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.post(this.API_ENDPOINT + '/Encuestas', encuesta, {
            headers: headers});
    }

    put(encuesta) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.put(this.API_ENDPOINT + '/Encuestas/' + encuesta.PK_ENCUESTA,
            encuesta, {headers: headers});
    }

    delete(PK_ENCUESTA) {
        return this.httpClient.delete(this.API_ENDPOINT + '/Encuestas/' + PK_ENCUESTA);
    }
}
