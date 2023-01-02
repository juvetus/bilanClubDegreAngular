import { Component } from '@angular/core';
import { Question } from 'src/app/models/question';
import { SuperQuestionService } from 'src/app/services/super-question.service';
import { Model, StylesManager } from "survey-core";
import { surveyJson } from './json';



StylesManager.applyTheme("defaultV2");

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions : Question[] = [];
  questToEdit?:Question;
   SURVEY_ID = 1;
   surveyComplete (sender: { data: any; }) {
    saveSurveyResults(
      // "https://localhost:7238/api/Questions/",
      // "https://apisondage.azurewebsites.net/api/questions",
      "",
      sender.data
    )
  }
  
  model!: Model;
  constructor(private api : SuperQuestionService){}

  ngOnInit(): void {
  
    const servey = new Model(surveyJson)
    this.model = servey;
    servey.onComplete.add(this.surveyComplete)
   // this.api.createHero(se)
    // servey.onComplete.add(this.alertResults)
    console.log(servey)
    
  }

  updateQuestList(questions: Question[]){
   this.questions = questions;
  }

}
function saveSurveyResults(url: string, surveyJson: any) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
    // Handle "load"
  });
  request.addEventListener('error', () => {
    // Handle "error"
  });
  request.send(JSON.stringify(surveyJson));
  console.log('servey', surveyJson)
}

