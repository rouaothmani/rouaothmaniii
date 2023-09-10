import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  educationData: any = [
    {
    }
  ];
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }
}
