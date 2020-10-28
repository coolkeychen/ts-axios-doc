// 类型注解： 明确参数类型及数量
function greeter(person: string) {
  return 'Hello ' + person
}

let user = 'Yee'

console.log(greeter(user))