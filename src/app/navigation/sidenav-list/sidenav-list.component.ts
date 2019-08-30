import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SchoolService } from 'src/app/shared/school.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(public dialog: MatDialog,
              public service: SchoolService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }
  onClose(){
    this.closeSidenav.emit();
  }

  onLogout(){
    this.closeSidenav.emit();
    this.service.valid = false;
    this.toastr.warning('Logout successfully' , 'Logout');
    this.router.navigate(['/']);
  }

  openDialog(){
    this.closeSidenav.emit();
    const dialogRef = this.dialog.open( DialogPrincSideComponent, {
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-dialogprincside',
  templateUrl: 'dialogprincside.html',
})
export class DialogPrincSideComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPrincSideComponent>) {}
}
