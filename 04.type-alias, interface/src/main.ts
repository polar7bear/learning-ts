//interface
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean
}

const bear1: Bear = {
    name: 'honey bear',
    honey : true
}

//type alias

type Animal2 = {
    name : string
}

type Bear2 = Animal & {
    honey: boolean;
}

const bear3: Bear = {
    name: 'honey bear',
    honey: true
}

// interface 선언 병합 (type alias 에서는 안됨)

interface Human {
    name: string
}

interface Human {
    age: number
}

const human1: Human = {
    name: 'son',
    age: 100
}