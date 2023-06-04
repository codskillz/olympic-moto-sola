import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { IndianComponent } from './pages/indian/indian.component';
import { KawasakiComponent } from './pages/kawasaki/kawasaki.component';
import { PolarisComponent } from './pages/polaris/polaris.component';
import { DucatiComponent } from './pages/ducati/ducati.component';
import { MvAgustaComponent } from './pages/mv-agusta/mv-agusta.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndianComponent,
    KawasakiComponent,
    PolarisComponent,
    DucatiComponent,
    MvAgustaComponent,
    PocetnaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHideOnScrollModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
