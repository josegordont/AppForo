import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foro } from '../foro/Entities/Foro';


@Injectable()
export class AppForoService {

    private url: string;
    
    constructor(private httpClient: HttpClient) {
    }
    
    public saveForo(foro: Foro): Observable<any> {
        this.url = `http://localhost:8080/app-foro/service/foro/saveForo`;
        return this.httpClient.post<boolean>(this.url, foro);
    }

}