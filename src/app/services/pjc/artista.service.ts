import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersistanceService } from 'src/app/localstorage.service';
import { Artista } from 'src/app/model/pjc/Artista.model';
import { Dominio } from 'src/app/utilitarios/Dominio.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  constructor(private localStorage:PersistanceService, private http: HttpClient, private dominio:Dominio) { }
 
  listarArtistas():Promise<Artista> {
   
    const httpHeaders: HttpHeaders = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem("token")
    });
     const requestOptions = {  headers: httpHeaders};
     var api = '/api/artista/listar/nome';

     const url = this.dominio.linkUrl + api;
      return this.http.get(url, requestOptions)
            .toPromise().then((resposta: any) => resposta)

    }

}
