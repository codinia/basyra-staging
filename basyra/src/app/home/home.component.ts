import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint: number;

  constructor() { }
   

 
  
  public executeSelectedChange = (event) => {
    console.log(event);
  }
  ngOnInit(): void {

    this.breakpoint = (window.innerWidth <= 480) ? 1 : 2;
  }
  onResize(event) {

    this.breakpoint = (event.target.innerWidth <= 480) ? 1 : 2;
  }

}
