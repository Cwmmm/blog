// __proto__与prototype
const arr = new Array(8)
//实例对象的__proto__指向它的构造函数的prototype
console.log(arr.__proto__ == Array.prototype)//true
//一切函数对象的__proto__指向Function.prototype
console.log(Array.__proto__==Function.prototype)//true
console.log(String.__proto__==Function.prototype)//true
/**
 * 函数的prototype属性:
 * 1.函数对象的prototype属性包含一个指向自生的constructor
 * 2.它本身想要被继承的属性和方法
 * 3.一个指向他的构造函数的__proto__
 */
console.log(Array.prototype.__proto__ == Object.prototype)//true
/* Object 与 Function
 * 1.一切函数对象都继承与Function.prototype,通过函数对象的__proto__实现
 * 2.一切对象都继承于Object,通过实例对象的__proto__与函数对象的prototype
 * 3.Function对象的__proto__指向它自己的prototype
 * 4.object的原型是 null
 */
console.log(Function.prototype.__proto__==Object.prototype)//true
console.log(Function.__proto__==Function.prototype)//true
console.log(Object.prototype.__proto__==null)//true


/**继承 */

//原型链继承
//通过设定子类的prototype为父类的实例
/**优点: 
 * 1. 父类方法可以公用
 * 缺点:
 * 1. 因为是引用父类的方法,通过一个实例的修改会导致所有的实例的访问被同步修改,除非为实例重新赋值
 * 2. 实例无法向父类传参
 */
function Animal(){
  this.name= 'animal',
  this.count='countless'
}
Animal.prototype.say= function(){
  console.log('mmmmmm')
}
function Cat(name){
  this.name=name
}
Cat.prototype= new Animal()
const cat1= new Cat('kitty')

//构造函数继承
//通过call来实例化子类
/**优缺点:
 * 和原型链继承反过来
 */
function dog(){
  //直接将实例的this传到父类实例化
  Animal.call(this)
}
const doggy=new dog()
console.log(doggy.name)


//组合继承
//将不需要共享的属性和方法通过构造函数继承,将需共享的方法和属性通过原型链继承
//优点: 综合了两种方式的优点,缺点: 父类会被执行两次
function Mouse(){
  Animal.call(this)//第二次执行
}
Mouse.prototype=new Animal()//第一次执行
//第二次实例化会覆盖第一次执行但是prototype会被保留
const zhizhi= new Mouse()
zhizhi.say()


//原型式继承
//优缺点同原型链式继承
const person={
  name:'jans',
  friends:['c','w']
}
//使用Object.create()创建一个新对象，
//使用现有的对象来提供新创建的对象的__proto__
const p1= Object.create(person)
const p2=Object.create(person)
p1.friends.push('m')
console.log(p2.friends)//["c", "w", "m"]引用属性,被同步
p1.name='cwm'
console.log(p2.name)//jans基础属性,不会被同步


//寄生组合式继承

function Factory(name){
  this.name=name
}
Factory.prototype.say=function(){
  console.log(this.name)
}
//通过call实例化e1
function exam(name){
  Factory.call(this,name)
}
//将factory.prototype作为exam的原型
exam.prototype= Object.create(Factory.prototype)

const e1= new exam('ddd')
e1.say()



//es6 class extends
// es6 class 是寄生组合的语法糖

class A{
  constructor(){
    this.name='A',
    this.type='Father'
  }
  say(){
    console.log(this.name)
  }

}

class B extends A{
  constructor(){
    super()
    
  }
}
//es6 class实现原理
// Object.setPrototypeOf = function (obj, proto) {
//   obj.__proto__ = proto;
//   return obj;
// }
// B 的实例继承 A 的实例
// Object.setPrototypeOf(B.prototype, A.prototype);
// B 继承 A 的静态属性
// Object.setPrototypeOf(B, A);?


const b= new B()
console.dir(B.__proto__==A)//true
console.dir(B.prototype.__proto__==A.prototype)//true
