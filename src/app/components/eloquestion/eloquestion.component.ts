import { Component } from '@angular/core';
import { SuperQuestionService } from 'src/app/services/super-question.service';
import { environment } from 'src/environments/environments.prod';
import {  Model } from "survey-core";
import { surveyJson } from './json';

@Component({
  selector: 'app-eloquestion',
  templateUrl: './eloquestion.component.html',
  styleUrls: ['./eloquestion.component.css']
})
export class EloquestionComponent {
  surveyModel!: Model;
  


  constructor(private api: SuperQuestionService){}

  alertResults (sender: { data: any; }) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }
  
  ngOnInit(): void {
    const survey = new Model(surveyJson)
    this.surveyModel = survey;
    survey.onComplete.add(this.api.surveyComplete);
    // survey.onComplete.add(this.alertResults);
    
  }

}


