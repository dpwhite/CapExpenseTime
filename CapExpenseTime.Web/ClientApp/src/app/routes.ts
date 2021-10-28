import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProjectListComponent, ProjectDetailComponent, ProjectListResolver } from './projects/index';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

export const appRoutes: Routes = [
  //{ path: '', redirectTo: '/projects', pathMatch: 'full' },
  //{ path: 'projects', component: ProjectListComponent, resolve: {projects: ProjectListResolver}},
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '', component: ProjectListComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'employees/:id', component: EmployeesListComponent}
]
