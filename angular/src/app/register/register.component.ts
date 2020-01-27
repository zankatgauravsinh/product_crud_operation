import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error;
  constructor( public userservice: UserService,
               private route: ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    name    : new FormControl(''),
    email   : new FormControl(''),
    dob     : new FormControl(''),
    password: new FormControl(''),
  });

  submit(){
    if (this.form.valid) {
      console.log('user =', this.form.value);
      let user = {
        name: this.form.value.name,
        email: this.form.value.email,
        dob: this.form.value.dob,
        password: this.form.value.password
      }
      this.userservice.register(user)
      .subscribe(
        (() => {  this.router.navigate(['/']);
      }),
        (err => console.log('err', err))
      )
      
    } else {
      this.error = 'error'
    }
  }

}
