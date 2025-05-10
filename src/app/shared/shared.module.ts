import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaoService } from './services/dao.service';
import { AutenticadorService } from './services/autenticador.service';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../app.state';
import { MenuService } from './services/menu.service';
import { AppSettings } from '../app.settings';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    AppState,
    DaoService,
    MenuService,
    AppSettings,
    AutenticadorService
  ]
})
export class SharedModule { }
