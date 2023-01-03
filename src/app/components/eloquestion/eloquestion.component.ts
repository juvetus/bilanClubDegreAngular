import { Component } from '@angular/core';
import { SuperQuestionService } from 'src/app/services/super-question.service';


import {  Model } from "survey-core";
import { surveyJson } from './json';

@Component({
  selector: 'app-eloquestion',
  templateUrl: './eloquestion.component.html',
  styleUrls: ['./eloquestion.component.css']
})
export class EloquestionComponent {
  surveyModel!: Model;
  private url = "questions";


  constructor(private api: SuperQuestionService){}

  alertResults (sender: { data: any; }) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }
  surveyComplete (sender: { data: any; }) {
    saveSurveyResults(
        "https://apisondage.azurewebsites.net/api/questions",
    
      sender.data
    )
  }

  ngOnInit(): void {
    const survey = new Model(surveyJson)
    this.surveyModel = survey;
     survey.onComplete.add(this.surveyComplete);
    
  }

}
function saveSurveyResults(url: string, json: any) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load',()=>{});
  request.addEventListener('error', ()=>{});
  request.send(JSON.stringify(json));
}

