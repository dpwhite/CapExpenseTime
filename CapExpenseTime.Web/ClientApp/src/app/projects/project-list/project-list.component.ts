import { Component, OnInit } from '@angular/core';
import { Project, ProjectService, ProjectMonth } from '../index';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  employeeId: string = '';
  projects: Project[] = [];
  tableData: any;
  showProjectInfo: boolean = false;
  project: Project = new Project();

  columnHeaders: string[] = ['name',
    'project',
    'afe',
    'project management',
    'requirement gathering',
    'solution design',
    'solution build',
    'data conversion',
    'testing',
    'total'
  ];
  //objectKeys = Object.keys;
  selectedProjectMonth: number;

  earliestProjectYear: number = 2018;
  currentYear: number;
  projectYears: number[] = [];

  projectMonths: ProjectMonth[] = [
    { id: 0, month: 'January', selected: false },
    { id: 1, month: 'Febrary', selected: false },
    { id: 2, month: 'March', selected: false },
    { id: 3, month: 'April', selected: false },
    { id: 4, month: 'May', selected: false },
    { id: 5, month: 'June', selected: false },
    { id: 6, month: 'July', selected: false },
    { id: 7, month: 'August', selected: false },
    { id: 8, month: 'September', selected: false },
    { id: 9, month: 'October', selected: false },
    { id: 10, month: 'November', selected: false },
    { id: 11, month: 'December', selected: false }
  ]
  displayedColumns: string[] = ['name', 'project type', 'start date', 'description'];

  constructor(private router: Router, private route: ActivatedRoute, private service: ProjectService) {
  }

  ngOnInit(): void {

    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    for (let i = this.earliestProjectYear; i <= this.currentYear; i++) {
      for (let x = 0; x < 12; x++) {
        this.projectMonths
      }
    }
    this.employeeId = this.route.snapshot.paramMap.get("id") || '';
    let currentMonth = new Date().getMonth();
    this.projectMonths[currentMonth].selected = true;

    if (this.employeeId.length > 0) {
      this.service.getProjectsForEmployee(this.employeeId).subscribe(
        (res: Project[]) => {
          this.projects = res;
        },
        (err: any) => {
          console.log('Errors: ', err);
        }
      );
    }
    else {
      //retrieve all projects for all employees with an entry from last month
      this.service.getProjectsUsedLastMonth().subscribe(
        (res: Project[]) => {
          this.projects = res;
        },
        (err: any) => {
          console.log('Errors: ', err);
        }
      );
    }
    this.initDataSource();
  }

  initDataSource(): void {
    //this.projectDataSource = new MatTableDataSource(this.tableData);
  }

  editProjectInfo(projectId: string) {
    console.log('project id: ', projectId);
    this.service.getProject(projectId).subscribe(
      (res: Project) => {
        this.project = res;
      }
    );
    this.showProjectInfo = true; 
  }

  cancel(): void {
    this.project = new Project();
    this.showProjectInfo = false;
  }

  saveChanges(): void {
    this.service.getProjectsForEmployee(this.employeeId).subscribe(
      (res: Project[]) => {
        this.projects = res;
        this.showProjectInfo = false;
      },
      (err: any) => {
        console.log('Errors: ', err);
      }
    );
  }
}
