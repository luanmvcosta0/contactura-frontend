import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaoService } from './services/dao.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    DaoService
  ]
})
export class SharedModule { }
