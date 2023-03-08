import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { DostupneMarkeComponent } from './dostupne-marke/dostupne-marke.component';
import { UslugeComponent } from './usluge/usluge.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ONamaComponent,
    DostupneMarkeComponent,
    UslugeComponent,
    KontaktComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
