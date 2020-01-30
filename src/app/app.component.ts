import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstapp';
  name: string ='';
  clickCounter: number =0;
 
  constructor(){

  }

  countClick(){
    this.clickCounter+=1;
  }
}
