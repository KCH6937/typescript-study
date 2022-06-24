interface User {
    age: number;
    name: string;
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sumFunc: SumFunction;
sumFunc = function(a: number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let strArr: StringArray = ['a', 'b', 'c'];
// strArr[0] = 10; // Error


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let srd: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

Object.keys(srd).forEach(function(value) {
    console.log(value);
});


