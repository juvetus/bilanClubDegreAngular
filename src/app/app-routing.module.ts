import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { EloquestionComponent } from './components/eloquestion/eloquestion.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
   { path: '',   redirectTo: '/question', pathMatch: 'full' },
  { path: 'question', component: QuestionComponent },
  { path: 'edit-question', component: EditQuestionComponent },
  {path: 'eloquestion', component:EloquestionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
