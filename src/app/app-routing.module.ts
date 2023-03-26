import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { AppComponent } from './app.component';
import { DucatiComponent } from './pages/ducati/ducati.component';
import { IndianComponent } from './pages/indian/indian.component';
import { KawasakiComponent } from './pages/kawasaki/kawasaki.component';
import { MvAgustaComponent } from './pages/mv-agusta/mv-agusta.component';
import { PolarisComponent } from './pages/polaris/polaris.component';

const routes: Routes = [
  { path: '', component: PocetnaComponent },
  { path: 'pages/indian', component: IndianComponent },
  { path: 'pages/kawasaki', component: KawasakiComponent },
  { path: 'pages/polaris', component: PolarisComponent },
  { path: 'pages/ducati', component: DucatiComponent },
  { path: 'pages/mv-agusta', component: MvAgustaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
