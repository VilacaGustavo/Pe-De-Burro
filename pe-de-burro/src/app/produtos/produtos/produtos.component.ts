import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { catchError, Observable } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Produto } from '../models/produto';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable<Produto[]>;
  displayedColumns = ['Nome','Categoria','Preco'];

  constructor(
    private produtoService: ProdutosService,
    public dialog: MatDialog
    ){

    this.produtos$ = this.produtoService.lista().pipe(catchError(
      error => {
        this.openError('Erro 404');
        return of([]);
      }
    ));
  }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  openError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error
    });
  }

}
