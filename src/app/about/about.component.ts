import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about1: any
  about2: any
  
  constructor(private profileService:AboutService) { }
  
    ngOnInit() {
      this.about1 =  this.profileService.about
      this.about2 =  this.profileService.about2
    }
  
  }
  
