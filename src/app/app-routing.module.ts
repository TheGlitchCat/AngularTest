import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components 
import { OtherComponent } from 'src/app/src/app/components/other/other.component';
import { HomeComponent } from 'src/app/src/app/components/home/home.component';
import { FormsComponent } from 'src/app/src/app/components/forms/forms.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: "other", component: OtherComponent },
  { path: "forms", component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
