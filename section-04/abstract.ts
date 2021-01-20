/*
 * @Description: 抽象类
 * @Author: Cat
 * @Date: 2021-01-20 14:47:29
 * @LastEditTime: 2021-01-20 15:03:25
 * @LastEditor: Cat
 */


abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }

  printName(): void {
    console.log('Department name '+ this.name + '!');
  }

}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing')
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department
// department = new Department();
department = new AccountingDepartment();
department.printName()
// department.printMeeting()