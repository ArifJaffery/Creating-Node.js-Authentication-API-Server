import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule}  from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent}   from './components/login-component';

export const routes:Routes=[
  {component:LoginComponent,path:'login'}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
