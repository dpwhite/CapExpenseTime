export class Project {
    id: string = '';
    name: string = '';
    projectType: string = '';
    startDate: string = '';
    endDate: string = '';
    description: string = '';
    totalHours: number = 0;
    employees: Employee[] = [];
    employeeCount: number = 0;
    
  }

  export interface IProject {
    id: string;
    name: string;
    projectType: string;
    startDate: Date;
    endDate: Date;
    lastUpdate: Date;
    description: string;
    totalHours: number;
    employees: Employee[];
  }
  
  export class ProjectMonth {
    id: number;
    month: string;
    selected: boolean
  }
  
  export class Employee {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    title: string;
  }
