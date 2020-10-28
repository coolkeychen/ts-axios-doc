class User {
  fullName: string
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

// 类型注解： 明确参数类型及数量
function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('chunkai','chen')

console.log(greeter(user))