import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  
  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '30%'
    },
    {
      'id': '2',
      'skill': 'NEST JS',
      'progress': '20%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '30%'
    },
    {
      'id': '4',
      'skill': 'SQL,FIREBASE',
      'progress': '35%'
    },
    {
      'id': '5',
      'skill': 'PHP',
      'progress': '50%'
    },
    {
      'id': '6',
      'skill': 'HTML,CSS',
      'progress': '65%'
    }
  ];

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }
}
