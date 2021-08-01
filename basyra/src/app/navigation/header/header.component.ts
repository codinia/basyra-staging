
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/components/user-SignIn-up/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
 
onclick(){
  
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          modal_type :1,
          
        };
        
  this.dialog.open(AuthComponent, dialogConfig);


}
becomeHost(){
  const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          modal_type :2,
       
        };
        
  this.dialog.open(AuthComponent, dialogConfig);

}
  ngOnInit(): void {
  }

}
