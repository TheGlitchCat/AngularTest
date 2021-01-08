// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components 
import { AppComponent } from './app.component';
import { AComponent } from './src/app/components/a/a.component';
import { BComponent } from './src/app/components/b/b.component';
import { CComponent } from './src/app/components/c/c.component';
import { FinalComponent } from './src/app/components/final/final.component';
import { OtherComponent } from './src/app/components/other/other.component';
import { HomeComponent } from './src/app/components/home/home.component';
import { FormsComponent } from './src/app/components/forms/forms.component';
import { FormAComponent } from './src/app/components/form-a/form-a.component';
import { FormBComponent } from './src/app/components/form-b/form-b.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    FinalComponent,
    OtherComponent,
    HomeComponent,
    FormsComponent,
    FormAComponent,
    FormBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
