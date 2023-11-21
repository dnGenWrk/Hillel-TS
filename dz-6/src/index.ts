const preHiredEmployee1 = new PreHiredEmployee(451554, "Ostap", "Bender", 45154, "Z454844521");
const preHiredEmployee2 = new PreHiredEmployee(423422, "Steven", "Grant Rogers", 2323422, "U54545145");
const preHiredEmployee3 = new PreHiredEmployee(322422323, "Stephen", "Vincent Strange", 10500, "A34234324");

const employee1 = new HiredEmployee(12212, "Clark", "Savage Jr", 45154, "A54454", statusEmployees.active, departmentList.Marketing);
const employee2 = new HiredEmployee(13232, "Carl", "Lucas", 232232, "SD54454", statusEmployees.active, departmentList.Marketing);
const employee3 = new HiredEmployee(1423232, "Matt", "Murdock", 3423232, "SDS54454", statusEmployees.inactive, departmentList.IT);
const employee55555 = new HiredEmployee(5555555, "Matt555", "Murdock555", 3423232555, "SDS54454555", statusEmployees.active, departmentList.Accounting);

const preHiredEmployees: IPreHiredEmployee[] = new Array(preHiredEmployee1, preHiredEmployee2, preHiredEmployee3);
const hiredEmployees: IHiredEmployee[] = new Array(employee1, employee2, employee3, employee55555);

const employees = new Employees(preHiredEmployees, hiredEmployees);

const employee4 = new HiredEmployee(555, "tttt555", "gggg555", 3423232, "Z3433443", statusEmployees.active, departmentList.IT);
employees.addHiredEmployee(employee4);

employees.removeHiredEmployee(employee4);
console.log("employees", employees);
const preHiredEmployee4 = new PreHiredEmployee(444444, "4444", "4444", 10500, "A34234324");
employees.addPreHiredEmployee(preHiredEmployee4);
employees.removePreHiredEmployee(preHiredEmployee4);

const marketingDepartment = new Department(departmentList.Marketing, domains.Finance, { debit: 3000000, credit: 150000 }, employees);

marketingDepartment.addDepartmentEmployee(employee4);
marketingDepartment.addDepartmentEmployee(preHiredEmployee4);
console.log("accountingDepartment", marketingDepartment);
console.log("employees", employees);

const balanceEmployees: IBalance = {
  departments: [marketingDepartment],
  employees: {
    preHiredEmployees: [...preHiredEmployees],
    hiredEmployees: [...hiredEmployees],
  },
};

const employee55 = new HiredEmployee(5555, "ADFdfd", "DAfdggd", 34223, "ZsfA54454", statusEmployees.active, departmentList.Accounting);
const accountingDepartment = new AccountingDepartment(
  departmentList.Accounting,
  domains.Finance,
  { debit: 5451545, credit: 1500 },
  employees,
  balanceEmployees
);

accountingDepartment.addDepartmentEmployee(employee55);
console.log(accountingDepartment);

const itDepartment = new Department(departmentList.IT, domains.Engineering, { debit: 4515154, credit: 545415 }, employees);

accountingDepartment.addToBalance(employee55);
accountingDepartment.addToBalance(itDepartment);
console.log(accountingDepartment);
accountingDepartment.removeFromBalance(itDepartment);
accountingDepartment.removeFromBalance(employee55);
console.log(accountingDepartment);

const payments: IPayments = accountingDepartment.payments();
console.log(
  `Payments for Departments Total:  ${payments.totalDepartments}\nPayments for PreHiredEmployees Total:  ${payments.totalPreHired}\nPayments for HiredEmplyeess Total:  ${payments.totalHired}`
);

const company = new Company("Rogi i Kopiti", [itDepartment, marketingDepartment, accountingDepartment], employees);
console.log(company.employees.allEmployees);
