import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
  ngOnInit(): void {
  }

}
