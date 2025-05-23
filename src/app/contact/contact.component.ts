import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  model: any = {};
  nom: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  confirmation: string = '';

  constructor(){}

  envoyerEmail() {
    const mailto = `mailto:rouaothmanioffic@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent("Nom: " + this.nom + "\n" + this.message)}`;
    window.location.href = mailto;

    this.confirmation = 'Votre message est prêt à être envoyé.';
  }
  ngOnInit() {
   
     }


}
