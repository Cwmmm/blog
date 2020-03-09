//JS中的数据类型
const str= 'str'
const num= 123
const bol= true
const undef= undefined
const sym= Symbol()
function fun (){console.log(123)}

const num2= new Number(321)
const str2= new String('rts')
const bol2= new Boolean(1)


const N=null
const obj= {}
const arr=[1,2,3]
//typeof
//能判断 string,number,Boolean,undefined,symbol,function
//其余会被判断为object
// console.log(typeof str)//string
// console.log(typeof fun)//function
// console.log(typeof arr)//object

//instanceof
// str.__proto__==String.prototype
//只能判断具有构造函数的类型:object,function,array以及包装类
// console.log(str instanceof String)//false
// console.log(sym instanceof Symbol)//false

// console.log(fun instanceof Function)//true
// console.log(fun instanceof Object)//true


// console.log(obj instanceof Object)//true
// console.log(fun instanceof Function)//true
// console.log(arr instanceof Array)//true
// console.log(str2 instanceof String)//true


//obj.constructor
// console.log(obj.constructor==obj.__proto__.constructor)
//Object.prototype.toString.call()
// console.log(N.constructor)//error
// console.log(undef.constructor)

// const obj3= [1,2,3]
// obj3.__proto__ = String.prototype
//共同缺点
// console.log(obj3 instanceof Array)
// console.log(obj3.constructor == Array)

//Object.prototype.toString.call()
console.log(Object.prototype.toString.call(123))
console.log(Object.prototype.toString.call('abc'))
console.log(Object.prototype.toString.call(true))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(sym))
console.log(Object.prototype.toString.call(obj))
console.log(Object.prototype.toString.call(str2))





