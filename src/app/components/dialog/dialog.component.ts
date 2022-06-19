import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 public openDialog: boolean;
 constructor() {
   this.openDialog = true;
 }
  ngOnInit(): void {
  }

  public closeDialog(): void {
   this.openDialog = false;
  }
}
