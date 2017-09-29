import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListingComponent } from './components/listing/listing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export class AppRouter { }

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'projects', component: ListingComponent },
    { path: 'newproject', component: NewProjectComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
  
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);