// interface Person {
//     name: string;
//     age: number;
// }

type Person2 = {
    name: string;
    age: number;
}

var seho: Person2 = {
    name: '세호',
    age: 30
};

type MyString = string;
var mystr: MyString = 'hello';

type Todo = { id: string; title: string, done: boolean };
function getTodo(todo: Todo) {
    
}