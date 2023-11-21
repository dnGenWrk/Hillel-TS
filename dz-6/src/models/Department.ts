enum departmentList {
  "IT",
  "Marketing",
  "Accounting",
}

enum domains {
  "Finance",
  "Logistics",
  "Engineering",
}

interface IBudget {
  debit: number;
  credit: number;
}

interface IDepartment {
  name: departmentList;
  domain: domains;
  budget: IBudget;
  employees: IEmployees;
  departmentEmployees: IHiredEmployee[];
  balance(): number;
  addDepartmentEmployee(employee: IHiredEmployee | IPreHiredEmployee): void;
}

class Department implements IDepartment {
  departmentEmployees: IHiredEmployee[] = [];
  constructor(public name: departmentList, public domain: domains, public budget: IBudget, public employees: IEmployees) {
    this.setDepartmentEmployees();
  }

  setDepartmentEmployees(): void {
    this.departmentEmployees = this.employees.hiredEmployees.filter((el) => el.department === this.name);
  }
  balance(): number {
    return this.budget.debit - this.budget.credit;
  }

  addDepartmentEmployee(employee: IHiredEmployee | IPreHiredEmployee): void {
    if (employee instanceof HiredEmployee) {
      employee.department = this.name;
      this.employees.addHiredEmployee(employee);
      this.setDepartmentEmployees();
    } else {
      const { id, fname, lname, salary, bankAccNumber } = { ...employee };

      const newEmpl: IHiredEmployee = new HiredEmployee(id, fname, lname, salary, bankAccNumber, statusEmployees.active, this.name);
      this.employees.addHiredEmployee(newEmpl);
      this.setDepartmentEmployees();
    }
  }
}
