/*
 * @Description: 接口继承类
 * @Author: Cat
 * @Date: 2021-01-19 15:00:34
 * @LastEditTime: 2021-01-19 15:04:15
 * @LastEditor: Cat
 */


class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

class Imagec implements SelectableControl {
  select() { }
}
