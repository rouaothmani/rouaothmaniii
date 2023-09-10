import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workexp: any
  
    constructor(private profileService:ExperienceService) { }
  
      ngOnInit() {
  
        this.workexp =  this.profileService.exprience()
      }
  }
  
