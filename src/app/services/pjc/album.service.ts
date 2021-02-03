import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersistanceService } from 'src/app/localstorage.service';
import { Album } from 'src/app/model/pjc/Album.model';
import { Dominio } from 'src/app/utilitarios/Dominio.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private localStorage:PersistanceService, private http: HttpClient, private dominio:Dominio) { }
 

  listarAlbuns(nome:String, quantidade:Number, pagina:Number):Promise<Album> {
   
    const httpHeaders: HttpHeaders = new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem("token")
    });
     const requestOptions = {  headers: httpHeaders};
     var api = '/api/album/listar?nome=' + nome + '&quantidade='+quantidade + '&pagina='+pagina;

     const url = this.dominio.linkUrl + api;
      return this.http.get(url, requestOptions)
            .toPromise().then((resposta: any) => resposta)

    }
  
}
