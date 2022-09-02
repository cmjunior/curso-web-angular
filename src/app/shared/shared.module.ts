import { CardImageComponent } from './../card-image/card-image.component';
import { EnterAsTabDirective } from './enter-as-tab';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GalleriaModule } from 'primeng/galleria';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

import { CpfCnpjDirective } from './cpf-cnpj.directive';
import { FormatarPipe } from './formatar.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardImageComponent,
    CpfCnpjDirective,
    EnterAsTabDirective,
    FormatarPipe,
    SliderComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    GalleriaModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule
  ],
  exports: [
    CardComponent,
    CardImageComponent,
    CardModule,
    ButtonModule,
    CpfCnpjDirective,
    EnterAsTabDirective,
    FormatarPipe,
    FormsModule,
    GalleriaModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    SliderComponent,
    TableModule,
    ToastModule
  ]
})
export class SharedModule { }
