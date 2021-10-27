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
   
  export class EmployeeProjects {
    projectId: string = '';
    employeeId: string = '';
    name: string = '';
    projectType: string = '';
    projectManagement: number = 0;
    gapAnalysis: number = 0;
    solutionDesign: number = 0;
    solutionBuild: number = 0;
    dataConversion: number = 0;
    testing: number = 0;
    trainig: number = 0;
    comments: string = '';
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
