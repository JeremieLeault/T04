import { Component, OnInit } from '@angular/core';
import { Film } from 'src/assets/class/film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit {

  //props
  public films:Film[];

  // injection de dépendances
  constructor(private serviceFilms:FilmsService) { 
    // initialiser les properties
    this.films=[];
  }

  // lifeCycle
  ngOnInit(): void {
    //gestion des datas
    this.serviceFilms.getFilms().subscribe(
      (datas:Film[]) => {
        console.warn('depuis le comp : ', datas);
        console.table(datas);
        this.films=datas;
      }
    );
  }

}
