import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceService } from 'src/app/localstorage.service';
import { AccessTokenResponse } from 'src/app/model/seguranca/AccessTokenResponse.model';
import { AutenticacaoService } from 'src/app/services/seguranca/autenticacao.service';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localStorage:PersistanceService, private autenticacaoService: AutenticacaoService,  private router: Router) { }
  public accessToken: AccessTokenResponse
  
  login = '';
  senha = '';
  
  ngOnInit(): void {
  }

  
  autenticar(login:string, senha:string) {
     this.autenticacaoService.login(login, Md5.hashStr(this.senha) )
                           .then( (accessTokenResponse: AccessTokenResponse) => {
                             this.accessToken = accessTokenResponse;
                             localStorage.setItem("token", String(this.accessToken.access_token));
                           }).catch((param: any) =>{
                              console.log(param);
                           });
  } 

}
