import { Component } from '@angular/core';
import { Question } from 'src/app/models/question';
import { SuperQuestionService } from 'src/app/services/super-question.service';
import { environment } from 'src/environments/environments.prod';
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
 

  
  model!: Model;
  constructor(private api : SuperQuestionService){}

  ngOnInit(): void {
  
    const servey = new Model(surveyJson)
    this.model = servey;
    servey.onComplete.add(this.api.surveyComplete)
  
    console.log(servey)
    
  }

  updateQuestList(questions: Question[]){
   this.questions = questions;
  }

}


