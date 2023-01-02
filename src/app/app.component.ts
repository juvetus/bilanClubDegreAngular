import { Component } from '@angular/core';

import { SuperQuestionService } from './services/super-question.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bilan Memoire Club Degré Plus';
  

   constructor(private api : SuperQuestionService){}
 
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 
 }


  
}
