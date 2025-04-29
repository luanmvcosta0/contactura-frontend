import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaoService } from './services/dao.service';
import { AutenticadorService } from './services/autenticador.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    DaoService,
    AutenticadorService
  ]
})
export class SharedModule { }
