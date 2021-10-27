import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project.model';

import { ProjectService } from '../project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  project: Project;
  projectId: string;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get("id") || '';
    this.projectService.getProject(this.projectId).subscribe(
      (res: Project) => {
        this.project = res;
      },
      (err: any) => {
        console.log('Errors: ', err);
      }
    );
    //this.route.params.forEach(
    //  (params: Params) => {
              
    //  }
    //)
  } 
}
