import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';

export const appRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent}
]