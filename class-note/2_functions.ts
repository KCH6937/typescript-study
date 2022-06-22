// 함수에 타입에 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}

sum(10, 20);

// 함수의 옵셔널 파라미터(?)
function log(a: string, b?: string, c?: string) {

}

log('hello world');
log('hello ts', 'abc');
