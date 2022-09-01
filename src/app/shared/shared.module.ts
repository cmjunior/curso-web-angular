import { EnterAsTabDirective } from './enter-as-tab';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

import { CpfCnpjDirective } from './cpf-cnpj.directive';
import { FormatarPipe } from './formatar.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CpfCnpjDirective,
    EnterAsTabDirective,
    FormatarPipe
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    CpfCnpjDirective,
    EnterAsTabDirective,
    FormatarPipe,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class SharedModule { }
