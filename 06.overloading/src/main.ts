function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}

let str = add("hello", "typescript");
let num = add(1, 5);

//

function saySomething(word: string | string[]): string {
    if (typeof word === 'string') {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(" ");
    }
}

saySomething(['hello', 'typescript']);

function saySomething2(word: string): string;
function saySomething2(words: string[]): string;
function saySomething2(word: any): any {
    if (typeof word === 'string') {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(" ");
    }
}

saySomething2(['hello', 'typescript']);