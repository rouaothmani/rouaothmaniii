import { Component, OnInit } from '@angular/core';
import { IntroService } from './intro.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:IntroService) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }

}
