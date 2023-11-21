interface IBalance {
  departments: IDepartment[];
  employees: {
    preHiredEmployees: IPreHiredEmployee[];
    hiredEmployees: IHiredEmployee[];
  };
}

interface IPayments {
  totalDepartments: number;
  totalPreHired: number;
  totalHired: number;
}

interface IAccountingDepartment extends IDepartment {
  Balance: IBalance;
  addToBalance(essence: IDepartment | IPreHiredEmployee | IHiredEmployee): void;
  removeFromBalance(essence: IDepartment | IPreHiredEmployee | IHiredEmployee): void;
  payments(): IPayments;
}

class AccountingDepartment extends Department implements IAccountingDepartment {
  constructor(public name: departmentList, public domain: domains, public budget: IBudget, public employees: IEmployees, public Balance: IBalance) {
    super(name, domain, budget, employees);
  }

  addToBalance(essence: IDepartment | IPreHiredEmployee | IHiredEmployee): void {
    if (essence instanceof Department) {
      this.Balance.departments.push(essence);
    } else if (essence instanceof HiredEmployee) {
      this.Balance.employees.hiredEmployees.push(essence);
    } else if (essence instanceof PreHiredEmployee) {
      this.Balance.employees.preHiredEmployees.push(essence);
    } else {
      console.log("Error: Can't take  essense to balance");
    }
  }
  removeFromBalance(essence: IDepartment | IPreHiredEmployee | IHiredEmployee): void {
    if (essence instanceof Department) {
      this.Balance.departments = this.Balance.departments.filter((el) => el.name !== essence.name);
    } else if (essence instanceof HiredEmployee) {
      this.Balance.employees.hiredEmployees = this.Balance.employees.hiredEmployees.filter((el) => el.id !== essence.id);
    } else if (essence instanceof PreHiredEmployee) {
      this.Balance.employees.preHiredEmployees = this.Balance.employees.preHiredEmployees.filter((el) => el.id !== essence.id);
    } else {
      console.log("Error: Can't remove  essense to balance");
    }
  }
  payments(): IPayments {
    const departmentsTotal = this.Balance.departments.reduce((accum, current) => {
      return (accum += current.balance());
    }, 0);

    const employeesHiredTotal = this.Balance.employees.hiredEmployees.reduce((acc, current) => {
      return (acc += current.salary);
    }, 0);

    const employeesPreHiredTotal = this.Balance.employees.preHiredEmployees.reduce((acc, current) => {
      return (acc += current.salary);
    }, 0);
    return {
      totalDepartments: departmentsTotal,
      totalPreHired: employeesHiredTotal,
      totalHired: employeesPreHiredTotal,
    };
  }
}
