import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GreatComponent } from './great/great.component';
import { LoginAuthModule } from './login-auth/login-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GreatComponent
  ],
  imports: [
    BrowserModule,
    LoginAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
