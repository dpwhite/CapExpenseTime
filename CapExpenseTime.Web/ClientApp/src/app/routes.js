"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var index_1 = require("./projects/index");
var counter_component_1 = require("./counter/counter.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var employees_list_component_1 = require("./employees/employees-list/employees-list.component");
exports.appRoutes = [
    //{ path: '', redirectTo: '/projects', pathMatch: 'full' },
    //{ path: 'projects', component: ProjectListComponent, resolve: {projects: ProjectListResolver}},
    { path: 'projects/:id', component: index_1.ProjectDetailComponent },
    { path: '', component: index_1.ProjectListComponent, pathMatch: 'full' },
    { path: 'counter', component: counter_component_1.CounterComponent },
    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
    { path: 'employees/:id', component: employees_list_component_1.EmployeesListComponent }
];
//# sourceMappingURL=routes.js.map