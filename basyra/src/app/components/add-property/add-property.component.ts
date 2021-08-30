
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  TypeOfproperty : string;
  propertyTypes : string[] =['Residential', 'Plot', 'Commercial'];


  radioChangeHandler(event : any){
  
    this.TypeOfproperty = event.value;
            event.mail_notification =[{
              "key": "all",
              "value": "First"
          },
          {
              "key": "selected",
              "value": "Second"
          },
          {
              "key": "only_my_events",
              "value": "Third"
          },
          {
              "key": "only_assigned",
              "value": "Fourth"
          },
          {
              "key": "only_owner",
              "value": "Fifth"
          },];
          event.mail_notification = 'all';
          event.radioSelection=function(event){
            debugger
            if(event== 'plot'){
              event.mail_notification='only_assigned';
           }
           if(event== 'Commercial'){
              event.mail_notification='all';
           }
      }
 
  }

  //autocomplete options
  options: string[] = ['Angular', 'React', 'vue'];
  objectOptions = [
    { name : 'Angular'},
    { name : 'Ract'},
    { name : 'Vue'},
    { name : 'nonstop'}
  ];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  constructor() { 
   
  }
  

  displayfun(subject){
    return subject ? subject.name : undefined;
  }
  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
