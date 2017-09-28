import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListingComponent } from './components/listing/listing.component';

export class AppRouter { }

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ListingComponent },
    { path: '**', component: HomeComponent }
  ];
  
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);