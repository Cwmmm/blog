

//es5中 顶层对象（window）的属性 === 全局变量
var name = 'window1'
console.log(window.name)//window1


//es6中 var，funtion声明的全局变量 === 顶层对象（window）的属性
//let,const声明的全局变量不在顶层对象的属性当中，只是在script块作用域当中
let name2 = 'window2'
console.log(window.name2)//undefined

//this指向 ： 谁调用指向谁，没人调用指向window

let doSth= function(){
  //true 没人调用指向window
  console.log(this === window)
  //window1 var function声明的全局变量在window对象中
  console.log(this.name)
  //let const声明不在window中
  console.log(this.name2)
}
doSth()

var name1 = "windowsName";
var a = {
    // name1 : null,
    fn : function () {
        console.log(this.name1);//不会向上查找作用域
    }
}
a.fn();//undefined 

//箭头函数的this指向定义时的this



/**
 * name1: windowsname
 * a: {}
 * 
 */


















// const name = 'hello'
// const doSth = function(){
//   console.log(this.name)
// }
// const student = {
//   name: '留创丰',
//   doSth,
//   other: {
//     name: 'other',
//     doSth
//   }
// }
// student.doSth()
// console.log(this)


