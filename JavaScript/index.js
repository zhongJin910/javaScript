// 作用域
// function myFunction() {
//     var carName = 'volvo'
//     console.log(carName, '内部访问'); // Success
// }
// myFunction()
// console.log(carName, '全局访问'); // Error (carName is not define)

// var carName1 = 'volvo'
// function myFunction1() {
//     console.log(carName1, '内部访问'); // Success
// }
// myFunction1()
// console.log(carName1, '全局访问'); // Success

function myFunction2() {
    carName2 = 'volvo'
    console.log(carName2, '内部访问'); // Success
}
myFunction2()
console.log(carName2, '全局访问'); // Success