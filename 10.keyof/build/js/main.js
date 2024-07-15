"use strict";
// "name" | "age" | "address" << 이와 같이 유니언 타입 반환
let user1 = "name";
const user = {
    name: "son",
    age: 100,
    address: 'ilsan'
};
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
