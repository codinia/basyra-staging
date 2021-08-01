import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() openLogInComponent = new EventEmitter<number>();

  public show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show;
  }
  SignIn(value: number) {
   
    value = 1;
    this.openLogInComponent.emit(value);
    
  }
}
