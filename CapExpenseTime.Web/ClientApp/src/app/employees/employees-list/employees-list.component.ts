import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectEmployee, EmployeeService } from '../index';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeeProjects: ProjectEmployee[] = [];
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
  constructor(private router: Router, private route: ActivatedRoute, private service: EmployeeService ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get("id") || '';
    this.yearMonth = this.route.snapshot.paramMap.get("yearMonth");

    console.log('project id: ', this.projectId);

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

}
