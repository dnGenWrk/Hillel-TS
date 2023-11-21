interface ICommpany {
  name: string;
  departments: IDepartment[];
  employees: IEmployees;
}

class Company implements ICommpany {
  constructor(public name: string, public departments: IDepartment[], public employees: IEmployees) {}
}
