interface CompanyModel {
    register(employee: EmployeeModel): void;
    unRegister(employee: EmployeeModel): void;
    sendEmail(): void;
}

interface EmployeeModel {
    id: number;
    department: string;
    name: string;
    receiveEmails(email: string): void;
}

class Company implements CompanyModel {

    current: EmployeeModel;
    employees: { [key: string]: EmployeeModel[] } = {}


    register(employee: EmployeeModel): void {
        this.current = employee;
        if (!this.employees[employee.department]) {
            this.employees[employee.department] = [];
        }
        this.employees[employee.department].push(employee);
    }

    unRegister(employee: EmployeeModel): void {
        this.employees[employee.department] = this.employees[employee.department].filter(e => e.id !== employee.id);
    }

    sendEmail(): void {
        this.employees[this.current.department].forEach((employee: EmployeeModel) => {
            employee.receiveEmails(`Department ${employee.department} please welcome ${employee.name}!!`);
        })
    }
};

class Employee implements EmployeeModel {
    id: number;
    department: string;
    name: string;

    constructor(id: number, department: string, name: string) {
        this.id = id;
        this.department = department;
        this.name = name;
    }

    receiveEmails(msg) {
        console.log(`${msg}\n`);
    }

}

const Kwentra = new Company();

const tester1001 = new Employee(1001, 'Testing Department', 'Ahmed Maher');
const tester1002 = new Employee(1002, 'Testing Department', 'Omnia Alaa');
Kwentra.register(tester1001);
Kwentra.register(tester1002);
Kwentra.sendEmail()


const developer2001 = new Employee(2001, 'Back-end', 'Ahmed Yasser');
const developer2002 = new Employee(2002, 'Front-end', 'Ashraf Emad');
Kwentra.register(developer2001);
Kwentra.register(developer2002);
Kwentra.sendEmail()


Kwentra.unRegister(tester1001);
Kwentra.sendEmail()

