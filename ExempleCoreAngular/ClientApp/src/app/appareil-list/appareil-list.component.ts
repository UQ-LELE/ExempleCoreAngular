import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.css']
})
export class AppareilListComponent implements OnInit {

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
  }

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        },
        2000
      );
    })

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  onAllumer() {
    console.log('On allume tout !');
  }
}
