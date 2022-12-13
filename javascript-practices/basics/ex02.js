/*
변수와 자료형(Data Type)
[기본타입(Primitive Type)]
- undefined
- number
- string
- boolean
[객체]
object
     1.new 생성자함수 () 사용해서 생성
        Number() => object 타입객체
        String() => object 타입객체
        Boolean() => object 타입객체
        Object() => object 타입객체
        Array() => object 타입객체
        Date() => object 타입객체
        RegExp() => object 타입객체
        Fuction() => function 타입의객체 !!!!!!
         
    2. {} 객체 리터럴, (j)ava(s)cript (O)bject (N)otation
    3. [] 배열 리터럴,
    4. null
function
    1. function f() {......}
    2. var f = function() {.....}
    3. var f = new function(......)
*/

 
console.log("======기본타입(undefined, number , string ,boolean)======");

var u = undefined; // var u; 동일, 선언 정의가 구분이 없다.
var i = 10;
var s = "Hello World";
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("===객체타입(object)=========================");
var i2 = new Number(10); 
var s2 = new String("Hello world");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [10, 20, 30];
var n = null;

console.log(i2 + ":" + typeof(i2)+ ":" + (i2 instanceof(Number)));
console.log(s2 + ":" + typeof(s2)+ ":" + (s2 instanceof(String)));
console.log(b2 + ":" + typeof(b2)+ ":" + (b2 instanceof(Boolean)));
console.log(o + ":" + typeof(o)+ ":" + (o instanceof(Object)));
console.log(a + ":" + typeof(a)+ ":" + (a instanceof(Array)));
console.log(d + ":" + typeof(d)+ ":" + (d instanceof(Date)));
console.log(o2 + ":" + typeof(o2)+ ":" + (o2 instanceof(Object)));
console.log(a2 + ":" + typeof(a2)+ ":" + (a2 instanceof(Array)));
console.log(n + ":" + typeof(n)+ ":" + (a2 instanceof(Object)));



console.log("===객체타입(object)=========================");

function f1(a, b){
    return a+ b;
}

var f2 = function(a, b){
    return a +b ;
}

var f3 = new Function("a", "b", "return a+b;");
console.log( f1(10,20), f2(10,20),f3(10,20));
console.log( "f1:" + typeof(f1)+ ":" +(f3 instanceof(Function)));
console.log( "f2:" + typeof(f2)+ ":" +(f3 instanceof(Function)));
console.log( "f3:" + typeof(f3)+ ":" +(f3 instanceof(Function)));
console.log("f3:"+ typeof(f3)+ ":" + (f3 instanceof(Function)));

