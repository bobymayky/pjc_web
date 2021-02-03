import { Injectable } from '@angular/core';
import { AccessTokenResponse } from 'src/app/model/seguranca/AccessTokenResponse.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Dominio } from 'src/app/utilitarios/Dominio.model';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(private http: HttpClient, private dominio:Dominio) { }

  login(login, password):Promise<AccessTokenResponse> {
    var api = '/api/autenticacao/autenticar';
    let grant_type = 'password';
    let body = `grant_type=${grant_type}&username=${login}&password=${password}`;
    const url = this.dominio.linkUrl + api;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'})
  
    };
    return this.http.post(url, body, httpOptions)
                .toPromise().then((resposta: any) => resposta)

   }
}