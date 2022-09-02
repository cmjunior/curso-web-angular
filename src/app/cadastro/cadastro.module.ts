import { SharedModule } from './../shared/shared.module';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CadastroComponent },
];

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]  
})
export class CadastroModule { }
