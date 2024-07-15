"use strict";
const bodyElement = document.querySelector('body'); // 타입 단언
bodyElement.innerText = 'halo';
const bodyElement1 = document.querySelector('body');
bodyElement1.innerText = 'bye'; // null이나 Undefined가 들어갈수가 없음을 명시
const bodyElement2 = document.querySelector('body'); // type guard
if (bodyElement2) {
    bodyElement2.innerText = 'hello';
}
function func(arg) {
    return arg ? arg.toLowerCase() : null;
}
func('hello');
func(null);
