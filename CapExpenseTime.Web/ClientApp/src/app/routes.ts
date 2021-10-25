import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProjectListComponent, ProjectDetailComponent, ProjectListResolver } from './projects/index';


export const appRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent, resolve: {projects: ProjectListResolver}},
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects/:id', component: ProjectDetailComponent },
]