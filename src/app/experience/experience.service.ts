import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }
  exprienceData: any = [
    {
      id: 5,
      company: 'SajaAcedemy',
      location: 'Medenine-Tunisia',
      timeline: 'From July 2023 to Septembre 2023',
      role: 'Full-Stack Developer',
    },
  //   {
  //     id: 4,
  //     company: 'Mediterranean Flight School (M.F.S)',
  //     location: 'Tunis',
  //     timeline: 'From September 2017 to August 2018',
  //     role: 'Frontend web developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  //     Worked on the web application built in Angular for different business and Campaigns .
  //     Contributed on developing the admin dashboard with different charts and insights for the application.`
  //   },
  //   {
  //     id: 3,
  //     company: 'Officina ',
  //     location: 'Medenine-Tunisa',
  //     timeline: 'From May 2019 to August 2019',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , Postgres  , Github .
  //     Build an ERP for the company Mangement .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },
  //   {
  //     id: 2,
  //     company: 'Iotech',
  //     location: 'Ain zagwan - Tunis ',
  //     timeline: 'From September 2019 to September 2021',
  //     role: 'Frontend Team Lead',
  //     work: `Technologies : Angular , Nestjs, Loopback , Postgres ,  Gitlab .
  //     Build an ERP for the company Mangement .
  //     Worked on E-commerce website for cosmetic products.
  // `
  //   },
  //   {
  //     id: 1,
  //     company: 'Gluu , Copenhagen - Denmark ',
  //     location: 'Remote',
  //     timeline: 'Since January 2022',
  //     role: 'Frontend developer',
  //     work: `Technologies : Angular (always last version) .
  //     Develop User interfaces for Modern Rich Internet Applications (SAAS Platform) with the
  //     latest Front End Technologies
  // `
  //   },


  ]
  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
