"use strict";
let bool;
let falseBool = false;
let num;
let int = 6;
let float = 1.123;
//str
let str;
let str1 = 'ssg';
//arr
let name1 = ['son', 'kim'];
let name2 = ['son', 'kim'];
let name3 = ['hi', 'hello'];
// 여러타입 배열 (union)
let arr1 = ['son', 1, 2];
let arr2 = ['son', 1, 2];
// any array
let someArr = ['son', 1, [], {}, false];
// 읽기 전용 배열
let stringArr = ['a', 'b'];
let numArr = [1, 2];
// tuple
let tuple1;
tuple1 = ['a', 2];
let users;
users = [[1, 'son'], [2, 'kim']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2); // 위에서 튜플의 타입을 string, number 타입으로 두가지만 정의 했지만 push 메서드를 이용하면 값을 삽입하는 것이 가능함. (없는 타입은 당연히 안됨)
console.log(tuple2);
// any // 써드파티 라이브러리의 반환 값을 확실하게 알 수 없거나 이와 비슷할 때에 사용하지만, 웬만하면 사용을 지양한다
let any = 'abc';
any = 1;
any = [];
any = false;
// unknown
let un = false;
//let un2: boolean = un;
let un3 = un; // type alias
// Object
let obj = {};
let arr = [];
//let nul; object = null; strict 모드 때문에 오브젝트 타입에 Null 할당 불가
let date = new Date();
const obj1 = {
    id: 1,
    title: '제목',
};
// union
let uni;
uni = 1;
uni = true;
// function
let func1;
func1 = function (x, y) {
    return x + y;
};
let func2;
func2 = function () {
    console.log('hello');
};
// null, undefined
//let number1: number = undefined;
//let string: string = null;
//let object: { a: 10, b: false } = undefined;
// strictnullcheck 옵션을 false로 주면 위 주석 처리 된 코드처럼 Undefined나 Null 할당이 가능하다. (어떤 타입이든)
// void 타입은 true로 되어있어도 undefined가 할당 가능
// void
function greeting() {
    console.log('hi');
}
const hi = greeting(); // return 값이 없으니 undefined
console.log(hi);
// never ( 항상 오류를 출력하거나, 리턴 값을 절대 내보내지 않음을 확신할 때 사용됨)
function throwError() {
    throw new Error('error');
}
// function keepProcessing(): never {
//     while(true) {
//         console.log('hi');
//     }
// }
