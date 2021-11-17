import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService, Project } from '../../projects/index';
import { ProjectEmployee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeeProjects: ProjectEmployee[] = [];
  employeeProject: ProjectEmployee;

  columnHeaders: string[] =
    [
    'name',
    'afe',
    'projectmanagement',
    'gapanalysis',
    'solutiondesign'
  ];
  projectId: string;
  yearMonth: string;
  tableData: any;
  clickedRows = new Set<ProjectEmployee>();
  projectName: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: EmployeeService, private projectService: ProjectService ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get("id") || '';
    this.yearMonth = this.route.snapshot.paramMap.get("yearMonth");
    this.employeeProject = new ProjectEmployee();

    console.log('project id: ', this.projectId);
    this.projectService.getProject(this.projectId).subscribe(
      (res: Project) => {
        this.projectName = res.name;
      },
      (err: any) => {
        console.log('Errors: ', err);
      }
    );


    this.service.getEmployeeTimeForProject(this.projectId, this.yearMonth).subscribe(
      (res: ProjectEmployee[]) => {
        console.log('Project Employee: ', res);
        this.employeeProjects = res;
      },
      (err: any) => {
        console.log('Errors: ', err);
      }
    );    
  }

  selectRow(row: any) {
    this.clickedRows.clear();
    this.clickedRows.add(row);
    this.employeeProject = row; 
  }

}
