import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  projects:any = [
    // {
    //   id: 1,
    //   title: 'Read data from Google spreadsheet in Angular',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/MyShop/#/',
    //   githurl: 'https://github.com/mehulk05/MyShop',
    //   mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
    //   imgUrl: 'assets/images/z1.png',
    //   tech: 'Angular 10 , Google SpreadsheetApi'
    // },
    {
      id: 1,
      title: 'Portofolio',
      githurl: 'https://github.com/rouaothmani/rouaothmani',
      imgUrl: 'assets/img/portfolio.png',
      tech: 'Angular, Bootstrap'
    },
    {
      id: 2,
      title: 'ISIMedenine',
      githurl: 'https://github.com/rouaothmani/projet',
      imgUrl: 'assets/img/isimed.png',
      tech: 'Angular, Bootstrap'
    }

  ]
  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
}
