import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnlinecoursesComponent } from './onlinecourses/onlinecourses.component';
import { HiringComponent } from './hiring/hiring.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnlinecoursesComponent,
    HiringComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
