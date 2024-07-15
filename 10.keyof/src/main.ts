interface IUser {
    name: string;
    age: number;
    address: string;
}

type UserKeys = keyof IUser;
// "name" | "age" | "address" << 이와 같이 유니언 타입 반환

let user1: UserKeys = "name";

const user = {
    name: "son",
    age: 100,
    address: 'ilsan'
}

type UserKeys2 = keyof typeof user;

enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole;