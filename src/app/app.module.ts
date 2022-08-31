import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BotaoComponent } from './botao/botao.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotaoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
