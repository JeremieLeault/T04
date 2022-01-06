import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './webApp/root/accueil/home/home.component';
import { ListeDesFilmsComponent } from './webApp/root/films/liste-des-films/liste-des-films.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'liste-des-films', component:ListeDesFilmsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
