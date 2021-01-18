/*
 * @Description: const
 * @Author: Cat
 * @Date: 2021-01-15 15:14:43
 * @LastEditTime: 2021-01-15 15:48:01
 * @LastEditor: Cat
 */


const numLivesForCat = 9;
const kitty = {
  name: 'Kitty',
  numLives: numLivesForCat
}

kitty = {
  name: 'cat',
  numLives: numLivesForCat
}

kitty.name = 'cat'
console.log(kitty.name);