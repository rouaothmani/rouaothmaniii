import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }
  exprienceData: any = [
    {
      id: 1,
      company: 'SajaAcedemy',
      location: 'Medenine-Tunisia',
      timeline: 'From July 2023 to Septembre 2023',
      role: 'Full-Stack Developer',
    },


  ]
  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
