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
