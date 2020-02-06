// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AuthComponent } from 'src/app/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
        {
            path: '',
            redirectTo: '/auth/login',
            pathMatch: 'full',
        },
        {
            path: 'login',
            loadChildren: 'src/app/auth/login/login.module#LoginModule'
        },
        {
            path: 'registration',
            loadChildren: 'src/app/auth/registration/registration.module#RegistrationModule'
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
