import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SchoolService } from 'src/app/shared/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService,
              public service: SchoolService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const user = form.value.email;
    const pwd = form.value.password;
    this.service.checkUser(user, pwd);
    if (this.service.valid) {
      this.toastr.success('User Authenticated', 'Login Success');
      this.router.navigate(['/']);
    } else {
      this.toastr.warning('User is not Authorised', 'Login Invalid');
      form.resetForm();
    }
}
}
