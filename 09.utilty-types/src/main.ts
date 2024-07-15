// Partial
interface Address {
    email: string,
    address: string,
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: 'son@naver.com' };
const all = { eamil: 'son@naver.com', address: 'ilsan' };


// Pick

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: 'clean room',
    completed: true
}

// Omit
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreView2 = Omit<Todo2, "description">;

const todo2: TodoPreView2 = {
    title: "clean room",
    completed: false,
    createdAt: 20230101
}

// Exclude

type myUnionType = string | number | boolean | [];

let excludeString: Exclude<myUnionType, string> = 123;
console.log(excludeString);

// Required
type User = {
    firstName: string,
    lastName?: string // 있어도 되고 없어도 되는 타입
}

let firstUser: User = {
    firstName: "son"
}

let secondUser: Required<User> = { //Required를 사용하면 ? 가 붙어있어도 해당 필드에 값을 명시를 해줘야함
    firstName: 'son',
    lastName: 'seung'
}

// Record

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "mizz" | "bear";

const cats: Record<CatName, CatInfo> = {
    mizz: { age: 1, breed: "cat1" },
    bear: { age: 1, breed: "cat2" }
}

// ReturnType

type T0 = ReturnType<() => string>

type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
    return str;
}

const a: ReturnType<typeof fn> = 'hello';
const b: ReturnType<typeof fn> = 'h123';