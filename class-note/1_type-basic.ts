// TS 문자열 선언
let str: string = 'hello';


// TS 숫자 선언
let num: number = 10;


// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
// 또는
let arr2: number[] = [1, 2, 3];


// TS 튜플
let address: [string, number] = ['stringType', 100];


// TS 객체
let obj: Object = {};

let person: object = {
    name: 'capt',
    age: 100
};
// 또는
let person2: { name: string, age: number } = {
    name: 'capt',
    age: 100
};

// TS 진위값
let show: boolean = true;


// TS any 타입
let allValue: any = [1, "3", true, [5, 3]];

// TS void 타입
let func = function(): void {
    console.log(123);
}