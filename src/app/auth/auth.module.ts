// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
// Components
import { AuthComponent } from 'src/app/auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
})
export class AuthModule { }
