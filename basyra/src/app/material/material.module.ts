import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    DragDropModule,

  ],
  exports:[
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    DragDropModule,
  ],
})
export class MaterialModule { }
