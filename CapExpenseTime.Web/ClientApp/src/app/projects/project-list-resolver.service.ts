import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProjectService } from '../projects/project.service';

@Injectable()
export class ProjectListResolver implements Resolve<any> {

  constructor(private projectService: ProjectService) { }

  resolve() {
    return this.projectService.getProjects().pipe(map(projects => projects));
  }
}