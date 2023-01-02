import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class SuperQuestionService {

   
   private url = "questions";
  constructor(private http: HttpClient) { }


  surveyComplete (sender: { data: any; }) {
    saveSurveyResults(
    
      `${environment.apiUrl}/${this.url}`,
      sender.data
     
    )
   
  }

  public getSuperQuestions() :Observable<Question[]> {
    
    return this.http.get<Question[]>(`${environment.apiUrl}/${this.url}`)
  
  }

  public deleteHero(quest: Question) :Observable<Question[]> {
    
     return this.http.delete<Question[]>(`${environment.apiUrl}/${this.url}/${quest.id}`)
 
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

