import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectEmployee, EmployeeService } from '../index';


export interface PeriodicElement {
  first: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, first: 'durward', name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, first: 'durward', name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, first: 'durward', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, first: 'durward', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, first: 'durward', name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, first: 'durward', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, first: 'durward', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, first: 'durward', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, first: 'durward', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, first: 'durward', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
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
