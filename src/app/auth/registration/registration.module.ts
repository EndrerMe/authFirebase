// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { RegistrationComponent } from 'src/app/auth/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  }
]

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegistrationModule { }
