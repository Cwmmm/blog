/**
 * instanceof其实是判断arr6.__proto__ ==Array.prototype
 * __proto__指向原型对象的prototype
 * prototype是原型对象上的一个对象,保存了该对象的原型对象的原型链
 * 只有函数有prototype属性
 * js没有类 所以需要通过函数来模拟类
 * 所有构造函数的__proto__都指向function.property
 * 实例的__proto__指向原型
 * function.__proto__==function.prototype
 * 
 */
//一切函数对象都继承于function,

function Person(name){
  this.name=name,
  this.skills=['eat','drink']
}
Person.prototype.say=function(){
  console.log('吃饭了没')    
}
function son(){}

son.prototype=new Person()

const son1= new son()
const son2= new son()
son1.skills.push('sleep')
console.log(son2.skills)

console.dir(Person.prototype.constructor)
console.dir(son.prototype.constructor)