/**                 array 数组API             */
/**Array数组创建 */
//使用array构造器
/** 如果Array()的话内部会判断是否是array的实例不是的话他会自动new array()
 *  一般推荐使用字面量,也就是[8] 但是如果你需要创建包含多个
 *  空元素的数组可以使用new array()
 *  new Array(8) res:[empty*8]
 *  new Array(8,2) res:[8,2]
*/
const arr1= new Array(8.0)//[empty*8]
// console.log(arr1)
const arr2 = Array(8)
//使用 array字面量
const arr3=[8]//[8]
/**ES6新增方法 */
//array.of 用于将参数转换为数组元素,区别与Array构造函数的是
//当参数为1个时候array.of(8)返回[8],new array(8)返回一个带有八个空元素的数组
const arr4= Array.of(8)
// console.log(arr4)


//array.from
/**
 * 有三个参数
 * 1 必选: 需要传入一个可迭代对象/伪数组对象
 * 可迭代对象: 可以获取对象中的元素
 * 伪数组对象: 拥有length属性和若干带索引属性
 * 2 可选: 传入回调函数 处理:array.from()== array.from(obj).map(mapfn,thisarg)
 * 3 可选: 传入回调函数中的this指向
 */
const obj1= {
  0:'a',
  1:'b',
  2:'c',
  length:3
}
const arr5=Array.from(obj1,function(value,index){
  // console.log(value, index, this.length)
  return value
},obj1)
// console.log(arr5)
/**判断对象是否为数组 */
const arr6=[]
// console.dir(arr6)
//1. instanceof 





//2. constructor
// console.log(arr6.constructor == Array)
//3. 








/**方法 */
/**改变自生 */
/**不改变自身 */
/**遍历方法 */
/** */


//二维数组的小bug
//浅拷贝，每个二维数组之间是引用关系，所以改变一个就会改变四个
const innerArr= new Array(4).fill(new Array(4).fill(0))
console.log(innerArr)
// 0: (4) [0, 2, 0, 0]
// 1: (4) [0, 2, 0, 0]
// 2: (4) [0, 2, 0, 0]
// 3: (4) [0, 2, 0, 0]
innerArr[0][1]=2
console.log(innerArr)
// 0: (4) [0, 2, 0, 0]
// 1: (4) [0, 2, 0, 0]
// 2: (4) [0, 2, 0, 0]
// 3: (4) [0, 2, 0, 0]



//
const innerArr1=[]
for( let i = 0; i < 4; i++){
  innerArr1[i]=new Array()
  for( let j = 0; j < 4; j++){
    innerArr1[i].push(j*i)
  }  
}
console.log(innerArr1)
// 0: (4) [0, 0, 0, 0]
// 1: (4) [0, 1, 2, 3]
// 2: (4) [0, 2, 4, 6]
// 3: (4) [0, 3, 6, 9]