"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var employees_list_component_1 = require("./employees-list.component");
describe('EmployeesListComponent', function () {
    var component;
    var fixture;
    beforeEach((0, testing_1.async)(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [employees_list_component_1.EmployeesListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(employees_list_component_1.EmployeesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=employees-list.component.spec.js.map