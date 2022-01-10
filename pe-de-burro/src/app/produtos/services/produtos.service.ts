import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs/operators';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produto.json';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get<Produto[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(Produto => console.log(Produto))
      );
  }

}
