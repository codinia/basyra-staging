import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  modal_type: any;

  constructor(private dialogRef : MatDialogRef<AuthComponent>, @Inject(MAT_DIALOG_DATA) data ) { 
                this.modal_type = data.modal_type;   
               }

  ngOnInit() {
  }
  modalType(newval : number){
    this.modal_type = newval;
  }
  


}
