// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//     return arr.length;
// }
function getArrayLength<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false, true];
getArrayLength<number>(arr1);
getArrayLength<string>(arr2);
getArrayLength<boolean>(arr3);

interface Vehicle<T> {
    name: string;
    color: string;
    option: T;
}

const car: Vehicle<{ price: number }> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike: Vehicle<boolean> = {
    name: 'Bike',
    color: 'blue',
    option: true
}


const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
    return [x, y];
}

const array = makeArr<number, number>(4, 5);
const array2 = makeArr<string, string>('a', 'b');

const makeArr2 = <T, Y = string>(x: T, y: Y): [T, Y] => {
    return [x, y];
}

const array3 = makeArr2<number>(3, 'bfd')

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullName({ firstName: 'son', lastName: 'son', location: 'ilsan' })
