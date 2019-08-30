import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SchoolService } from 'src/app/shared/school.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public dialog: MatDialog,
              public service: SchoolService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  openDialog(){
        const dialogRef = this.dialog.open( DialogPrincipalComponent, {
          width: '700px',
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }

      checkout(){
        this.service.valid = false;
        this.toastr.info('Logout Successfully' , 'Logout');
      }
}

@Component({
  selector: 'app-dialogprincipal',
  templateUrl: 'dialogprincipal.html',
})
export class DialogPrincipalComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPrincipalComponent>) {}
}
