import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectEmployee } from './index';

@Injectable({ providedIn: 'root' })

export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeTimeForProject(projectId: string): Observable<ProjectEmployee[]>  {
    return this.http.get<ProjectEmployee[]>(`api/employees/employeesbyproject/${projectId}`);
  }
}
