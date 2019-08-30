import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-footer-area',
  templateUrl: './footer-area.component.html',
  styleUrls: ['./footer-area.component.css']
})
export class FooterAreaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
        const dialogRef = this.dialog.open(DialogDeveloperComponent, {
          width: '500px',
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
}
@Component({
  selector: 'app-dialogdeveloper',
  templateUrl: 'dialogDeveloper.html',
})
export class DialogDeveloperComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDeveloperComponent>) {}
}
