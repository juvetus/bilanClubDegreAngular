import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuestionComponent } from './components/question/question.component';
import { SurveyModule } from "survey-angular-ui";
import {  HttpClientModule } from '@angular/common/http';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { EloquestionComponent } from './components/eloquestion/eloquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    EditQuestionComponent,
    EloquestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
