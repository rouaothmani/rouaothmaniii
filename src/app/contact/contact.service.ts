import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private readonly contactService:ContactService) { }

  sendMail():void{
       this.contactService.sendMail();

       
  }
}
