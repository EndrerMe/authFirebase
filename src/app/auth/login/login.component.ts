// Vendors
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  public message: string;
  public isError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '', [
          Validators.required,
        ]
      ),
      password: new FormControl(
        '', [
          Validators.required,
        ]
      )
    })
  }

  public tryLogin(e): void {
    e.preventDefault();
    const value = this.loginForm.value;
    this.authService.doLogin(value).then((res) => {
      localStorage.setItem('user', JSON.stringify(res))
      this.isError = false;
      this.message = 'You are login successfully'
      setTimeout(() => {
        this.router.navigate(['/personal-area']);
      }, 2000)
    }, (err) => {
      this.isError = true;
      this.message = err.message;
    })
  }

}
