import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesComponent } from './botones/botones.component';
import { RelojComponent } from './reloj/reloj.component';
import { ImagenComponent } from './imagen/imagen.component';
import { NombresComponent } from './nombres/nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    RelojComponent,
    ImagenComponent,
    NombresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
