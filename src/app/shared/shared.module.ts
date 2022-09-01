import { EnterAsTabDirective } from './enter-as-tab';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CpfCnpjDirective } from './cpf-cnpj.directive';
import { FormatarPipe } from './formatar.pipe';

@NgModule({
  declarations: [
    CpfCnpjDirective,
    EnterAsTabDirective,
    FormatarPipe
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    CpfCnpjDirective,
    EnterAsTabDirective,
    FormatarPipe
  ]
})
export class SharedModule { }
