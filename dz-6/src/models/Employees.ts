interface IPreHiredEmployee {
  id: number;
  fname: string;
  lname: string;
  salary: number;
  bankAccNumber: string;
}

enum statusEmployees {
  "active",
  "inactive",
  "unpaidVacation",
}

interface IHiredEmployee extends IPreHiredEmployee {
  status: statusEmployees;
  department: departmentList;
  setDepartment(department: departmentList): void;
}

class PreHiredEmployee implements IPreHiredEmployee {
  constructor(public id: number, public fname: string, public lname: string, public salary: number, public bankAccNumber: string) {}
}

class HiredEmployee extends PreHiredEmployee implements IHiredEmployee {
  constructor(
    id: number,
    public fname: string,
    public lname: string,
    public salary: number,
    public bankAccNumber: string,
    public status: statusEmployees,
    public department: departmentList
  ) {
    super(id, fname, lname, salary, bankAccNumber);
  }
  setDepartment(department: departmentList): void {
    this.department = department;
  }
}

interface IEmployees {
  preHiredEmployees: IPreHiredEmployee[];
  hiredEmployees: IHiredEmployee[];
  allEmployees: (IPreHiredEmployee | IHiredEmployee)[];
  addPreHiredEmployee(employee: IPreHiredEmployee): void;
  removePreHiredEmployee(employee: IPreHiredEmployee): void;
  addHiredEmployee(employee: IHiredEmployee): void;
  removeHiredEmployee(employee: IHiredEmployee): void;
}

class Employees implements IEmployees {
  allEmployees: (IPreHiredEmployee | IHiredEmployee)[] = [];
  constructor(public preHiredEmployees: IPreHiredEmployee[], public hiredEmployees: IHiredEmployee[]) {
    this.setAllEmployees();
  }

  addHiredEmployee(employee: IHiredEmployee): void {
    const id = this.hiredEmployees.find((el) => el.id === employee.id);
    if (!id) {
      this.hiredEmployees.push(employee);
      this.setAllEmployees();
    } else {
      console.log(`Error: can't add employee with id ${employee.id}`);
    }
  }
  removeHiredEmployee(employee: IHiredEmployee): void {
    const id = this.hiredEmployees.find((el) => el.id === employee.id);
    if (id) {
      this.hiredEmployees = this.hiredEmployees.filter((el) => el.id !== employee.id);
      this.setAllEmployees();
    } else {
      console.log(`Error: can't remove employee with id ${employee.id}`);
    }
  }

  addPreHiredEmployee(employee: IPreHiredEmployee): void {
    const id = this.preHiredEmployees.find((el) => el.id === employee.id);
    if (!id) {
      this.preHiredEmployees.push(employee);
      this.setAllEmployees();
    } else {
      console.log(`Error: can't add employee with id ${employee.id}`);
    }
  }

  removePreHiredEmployee(employee: IPreHiredEmployee): void {
    const id = this.preHiredEmployees.find((el) => el.id === employee.id);
    if (id) {
      this.preHiredEmployees = this.preHiredEmployees.filter((el) => el.id !== employee.id);
      this.setAllEmployees();
    } else {
      console.log(`Error: can't remove employee with id ${employee.id}`);
    }
  }

  setAllEmployees(): void {
    this.allEmployees = this.preHiredEmployees.concat(this.hiredEmployees);
  }
}
