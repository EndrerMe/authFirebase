// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PersonalAreaComponent } from 'src/app/personal-area/personal-area.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalAreaComponent,
  }
]

@NgModule({
  declarations: [
    PersonalAreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PersonalAreaModule { }
