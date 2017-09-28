import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { routes } from './app-router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { ListingComponent } from './components/listing/listing.component';

import { LoginService } from './components/login/login.service';
import { ListingService } from './components/listing/listing.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    ProjectComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routes
  ],
  providers: [
    LoginService,
    ListingService
  ],
  exports: [
    ProjectComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
