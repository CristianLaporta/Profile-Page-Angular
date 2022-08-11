import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { CardComponent } from './component/card-profile/card.component';
import { EmailProfileComponent } from './component/email-profile/email-profile.component';
import { BirthdayProfileComponent } from './component/birthday-profile/birthday-profile.component';
import { AbressProfileComponent } from './component/adress-profile/abress-profile.component';
import { PhoneProfileComponent } from './component/phone-profile/phone-profile.component';
import { AuthProfileComponent } from './component/auth-profile/auth-profile.component';
import { NavbarComponent } from './component//navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardComponent,
    EmailProfileComponent,
    BirthdayProfileComponent,
    AbressProfileComponent,
    PhoneProfileComponent,
    AuthProfileComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
