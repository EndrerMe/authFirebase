// Vendors
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private registForm: FormGroup;
  public message: string;
  public isError: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.registForm = this.formBuilder.group({
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

  public tryRegist(e): void {
    e.preventDefault();
    const value = this.registForm.value;
    this.authService.doRegist(value).then((res) => {
      this.isError = false;
      this.message = 'You are registered';
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 2000)
    }, (err) => {
      this.isError = true;
      this.message = err.message;
    })
  }

}
