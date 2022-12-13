/*
변수의 스코프(Scope)

1. 자바스크립트는 어휘(코드)에서 변수의 범위를 알 수 있다.(정적 스코프, Lexical Scope)
2. 자바스크립트 전역범위가 있다.
3. Es6이전 (<=Es5)
    - 자바와  같은 블록{} 스코프를 지원하지 않앗다
    - 함수 범위를 지원하다.
    - 함수 블록 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가진다.
4. Es6이후 (Es6~ Es13)
    - 자바와 같은 블록 스코프를 지원한다.
    - let 키워드를 붙혀서 블록 범윌를 가지게 한다.
    - conustL: 키워드 블록 범위에 상수에 적용한다.

5. 결론
    const/let 만 사용하고 둘중에 하나를 **반드시***  붙히자!!!!(안붙히면 전역 범위가 된다. hoisting)
*/
var i = 10;
var f = function() {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - i;
}

f();
console.log(i);
console.log(j);

console.log("==var 키워드는 함수 블록에서만 함수 범위를 만든다.==========");
if(90 + 10 === 100){
    var k = 20;
}

console.log(k);

{
    let x = 1000;
    const PI = 3.15;

    x = 100;
    PI = 0 ; // assign error


}
//console.log(x); // not defined error
console.log(PI); // not defined error

