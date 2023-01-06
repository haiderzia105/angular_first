import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GreatComponent } from './great/great.component';
import { LoginAuthModule } from './login-auth/login-auth.module';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ChildComponent } from './child/child.component';
import { ReuseItemComponent } from './reuse-item/reuse-item.component';
import { UsdPkrPipe } from './pipes/usd-pkr.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { GreenElDirective } from './green-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GreatComponent,
    HeaderComponent,
    ChildComponent,
    ReuseItemComponent,
    UsdPkrPipe,
    GreenElDirective
  ],
  imports: [
    BrowserModule,
    LoginAuthModule,
    FormsModule,
    // NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
