import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CepService {
  
  constructor(
    private httpClient: HttpClient
  ) {
    console.log('CEP Service Criada');
  }

  buscaCEP(cep: string) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
  }
}
