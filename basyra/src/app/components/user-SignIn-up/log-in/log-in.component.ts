import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
@Output() openRegComponent = new EventEmitter<number>();
public show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.show = !this.show;
  }
  
  createOne(value: number) {
   
    value = 2;
    this.openRegComponent.emit(value);
    
  }


}
