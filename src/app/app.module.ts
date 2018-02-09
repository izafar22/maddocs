import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './user/users.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeserviceService } from './home/homeservice.service';
import { UtilityService } from './services/utility.service';
import { PublishComponent } from './publish/publish.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    ContactUsComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeserviceService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
