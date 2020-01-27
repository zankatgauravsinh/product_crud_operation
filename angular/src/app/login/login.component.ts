import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  auth = JSON.parse(localStorage.getItem('currentUser'));
  constructor(private userservice: UserService,
              private route: ActivatedRoute,
              private router: Router) {
                if (this.auth) { 
                  this.router.navigate(['/dashboard']);
               }
              }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      console.log('user =', this.form.value)
      const user = {
        email: this.form.value.email,
        password: this.form.value.password
      }

      this.userservice.login(user)
      .subscribe(
        res => {
          console.log('successfull login')
          this.router.navigate(['/dashboard'])
        },
        err => {
          console.log('err ==', err)
          this.error = err.message;
        });

    }else {
      this.error = 'Please input valid input'
    }
  }

}
