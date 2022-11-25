import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { BarallaComponent } from './Projecte/Components/baralla/baralla.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    BarallaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
