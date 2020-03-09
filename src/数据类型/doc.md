# 数据类型
引用:<https://juejin.im/entry/5964a1c15188250d8b65ef5f>
## 基本数据类型
* String
* Number
* Boolean
* Null
* Underfined
* Symbal(ES6)
## 引用类型
* Object
> **Function**, **Array** 这些类型本质上是属于Object类型
## 三个基本包装类

> 众所周知,基本类型是无法调用属性和方法的, 为了方便操作这些基本类型,ES提供了三个包装类
* String
* Number
* Boolean
> 使用
```
  const str = 'sssss'
  console.log(str.subString(3))
```
> 让我们康康背后js做了什么(从第二行开始):
1. 创建一个String实例(new String('sssss'))
2. 调用String实例的subString方法返回字符串's'
3. 销毁实例(作用域) 
> **tips**: 因为作用域会执行完后立即销毁,所以如果在实例上挂载了属性或者方法也会被销毁,下次调用就是undefined
## 类型判断的几种方式
* typeof
> 无法判断 Array, Null类型,包装类(new Number)会被判断为Object
  ```
  //True
  typeof [] == Object
  //True
  typeof Null == Object
  ```
* instanceof
> 本质上是判断 obj.\_\_proto__ == Object.prototype
```
  console.log(str instanceof String)//false
```
> 按照设想的结果js会自动创建包装类来判断是否是String的实例,但结果确实False, 所以可知instanceof访问的是原始值,其他的类型没有包装类就更加无法判断 

**结论**: instanceof无法判断原始值
```
  arr instanceof Array//True
  arr instanceof Object//True
```
> Array构造函数继承于Object 所以arr即是Array的实例也是Object的实例,显然instanceof**无法准确判断对象类型**

* xx.constuctor
> Null,Undefined类型没有constructor,所以**执行会提示会报错**

* instanceof与xx.constructor的共同缺点
> 因为这两种都基于原型链,所以当你的原型链被手动改变的话,这两种方法都不能准确判断对象的类型
```
const obj3= [1,2,3]
obj3.__proto__ = String.prototype
console.log(obj3 instanceof Array)//False
console.log(obj3.constructor == Array)//False
```


* **Object.prototype.toString.call()**
> 这个方法可以判断所有类型,返回值为字符串 '**[object type]**'
```
console.log(Object.prototype.toString.call(123))//[object Number]
console.log(Object.prototype.toString.call('abc'))//[object String]
console.log(Object.prototype.toString.call(true))//[object Boolean]
console.log(Object.prototype.toString.call(null))//[object Null]
console.log(Object.prototype.toString.call(undefined))//[object Undefined]
console.log(Object.prototype.toString.call(sym))//[object Symbol]
console.log(Object.prototype.toString.call(obj))//[object Object]
console.log(Object.prototype.toString.call(function(){}))//[object Function]
console.log(Object.prototype.toString.call([1,2,3]))//[object Array]
console.log(Object.prototype.toString.call(str2))//[object String]

```



