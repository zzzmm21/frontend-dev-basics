/*
자바스크립트 객체 IV: prototype 기반의 상속과 오버라이딩: 자바스크립트 객체 지향 프로그래밍
*/

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'Web Dev & AI';
MyObject.prototype.info = function(){
    console.log(this.name + ":" + this.age + ":" + this.school + ":" + this.course);
}

// MyObject 객체 생성1
var o1 = new MyObject('michol', 30);
o1.info();

// MyObject 객체 생성2
var o2 = new MyObject('둘리', 10);
o2.info = function() {
    console.log("비밀!");
}
o2.info();