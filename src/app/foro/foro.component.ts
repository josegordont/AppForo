import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from './Entities/Question';
import { ResponseLevel1 } from './Entities/ResponseLevel1';
import { ResponseLevel2 } from './Entities/ResponseLevel2';
import { Foro } from './Entities/Foro';

import { AppForoService } from '../service/service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  userName: string;
  userImageUrl: string;

  question: string;
  questionNumber: number;
  questionList;
  
  responseNumber: number;
  responseLevel1List;

  responseLevel2List;

  constructor(private activatedroute: ActivatedRoute,
    private appForoService:AppForoService) {
  }

  ngOnInit() {
    this.userName = atob(this.activatedroute.snapshot.params['userName'].replace('<', '=').replace('>','%'));
    this.userImageUrl = atob(this.activatedroute.snapshot.params['userImageUrl'].replace('<', '='));
    console.log(this.userImageUrl);

    this.question = ''; 
    this.questionNumber = 0;
    this.questionList = [];

    this.responseNumber = 0;
    this.responseLevel1List = [];

    this.responseLevel2List = [];
  }

  postQuestion(){
    if(this.question.trim() == ''){
      alert('Please enter a question');
    }else{
      let questionToAdd = new Question();
      questionToAdd.questionId = ++this.questionNumber;
      questionToAdd.questionText = this.question;
      this.questionList.push(questionToAdd);
      this.question = '';
      this.saveForo();
    }
  }

  firstLevelResponse(questionId){
    document.getElementById('responseQuestion'+questionId).style.display = 'block';
  }

  saveFirstLevelResponse(questionId){
    let response = (document.getElementById('inputResponseQuestion'+questionId) as HTMLInputElement).value;
    if(response.trim() == ''){
      alert('Please enter a response');
    }else{
      let responseToAdd = new ResponseLevel1();
      responseToAdd.questionId = questionId;
      responseToAdd.responseId = ++this.responseNumber;
      responseToAdd.responseText = response;
      this.responseLevel1List.push(responseToAdd);
      document.getElementById('responseQuestion'+questionId).style.display = 'none';
      (document.getElementById('inputResponseQuestion'+questionId) as HTMLInputElement).value = '';
      this.saveForo();
    }
  }

  secondLevelResponse(responseId){
    document.getElementById('response'+responseId).style.display = 'block';
  }

  saveSecondLevelResponse(responseId){
    let response = (document.getElementById('inputResponse'+responseId) as HTMLInputElement).value;
    if(response.trim() == ''){
      alert('Please enter a response');
    }else{
      let responseToAdd = new ResponseLevel2();
      responseToAdd.fatherId = responseId;
      responseToAdd.responseId = ++this.responseNumber;
      responseToAdd.responseText = response;
      this.responseLevel2List.push(responseToAdd);
      console.log(this.responseLevel2List);
      document.getElementById('response'+responseId).style.display = 'none';
      (document.getElementById('inputResponse'+responseId) as HTMLInputElement).value = '';
      this.saveForo();
    }
    
  }

  saveForo(){
    let foro = new Foro();
    console.log(foro);
    foro.questionList = this.questionList;
    foro.responseLevel1List = this.responseLevel1List;
    foro.responseLevel2List = this.responseLevel2List;

    this.appForoService.saveForo(foro).subscribe(
      (response) => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }


}
