import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  userName: string;
  userImageUrl: string;

  constructor(private router: Router) { 
    // inicialización de variables
    this.userName = '';
    this.userImageUrl = '';
  }

  ngOnInit() {
  }

  entryForum(){
    // Valor por defecto userName
    if(this.userName.trim() == ''){
      this.userName = 'Guest';
    }
    // Valor por defecto userImageUrl
    if(this.userImageUrl.trim() == ''){
        this.userImageUrl = 'https://png.icons8.com/search/96';
    }
    this.router.navigateByUrl('/foro/' + btoa(this.userName).replace('=','<') + '/' + btoa(this.userImageUrl).replace('=','<'));
  }

}
