import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {surveyJson} from '../components/question/json'
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class SuperQuestionService {
   SURVEY_ID = 1;
   apiUrl = ""
  constructor(private http: HttpClient) { }


  surveyComplete (sender: { data: any; }) {
    saveSurveyResults(
      "https://localhost:7238/api/Questions/" + this.SURVEY_ID,
      sender.data
     
    )
   
  }

  public getSuperQuestions() :Observable<Question[]> {
    
   // return this.http.get<Question[]>(`${environment.apiUrl}/${this.url}`)
   //return this.http.get<Question[]>("https://localhost:7238/api/Questions/")
   return this.http.get<Question[]>("https://apisondage.azurewebsites.net/api/questions")
  }

  public deleteHero(quest: Question) :Observable<Question[]> {
    
    // return this.http.delete<Question[]>(`${environment.apiUrl}/${this.url}/${hero.id}`)
   return this.http.get<Question[]>("https://localhost:7238/api/Questions/" + quest.id)
   
  }
  

}
function saveSurveyResults(url: string | URL, json: any) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
    // Handle "load"
  });
  request.addEventListener('error', () => {
    // Handle "error"
  });
  request.send(JSON.stringify(json));
}

