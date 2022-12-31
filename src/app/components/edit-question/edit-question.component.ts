import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question';
import { SuperQuestionService } from 'src/app/services/super-question.service';
import { Model, StylesManager } from "survey-core"
import { json } from './json';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent {
  @Input() quest?:Question;
  questions : Question[] = [];

  @Output() heroesUpdated = new EventEmitter<Question[]>();
 
  constructor(private api: SuperQuestionService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.api.getSuperQuestions().subscribe(res => {
      this.questions = res;
    })

  
  }
  deleteHero(quest: Question){
    this.api.deleteHero(quest).subscribe((questions) => this.heroesUpdated.emit(questions))
  
  }
}
