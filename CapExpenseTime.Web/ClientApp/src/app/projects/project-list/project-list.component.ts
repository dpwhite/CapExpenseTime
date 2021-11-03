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
  projectMonthYear: string;
  earliestProjectYear: number = 2018;
  projectMonthYears: string[] = [];
  months: string[] = ['January','Febrary','March','April','May','June','July','August','September','October','November','December'];
  projectMonths: ProjectMonth[] = []
  displayedColumns: string[] = ['name', 'project type', 'start date', 'description'];

  constructor(private router: Router, private route: ActivatedRoute, private service: ProjectService) {
  }

  ngOnInit(): void {

    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = new Date().getMonth();
    let projectId: number = 1;
    for (let i = this.earliestProjectYear; i <= currentYear; i++) {
      for (let x = 0; x < 12; x++) {
        let projectMonth: ProjectMonth = new ProjectMonth;
        projectMonth.month = this.months[x] + '-' + i;
        projectMonth.id = projectId;
        projectId++;
        this.projectMonths.push(projectMonth);
        if (currentYear == i && currentMonth == x) {
          projectMonth.selected = true;
          this.projectMonthYear = projectMonth.month;
        }
      }
    }
    this.employeeId = this.route.snapshot.paramMap.get("id") || '';
    
    

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

  getProjectsByMonth(): void {
    this.service.getProjectsForMonthYear(this.projectMonthYear).subscribe(
      (res: Project[]) => {
        this.projects = res;
      },
      (err: any) => {
        console.log('Errors: ', err);
      }
    );
  }
}
