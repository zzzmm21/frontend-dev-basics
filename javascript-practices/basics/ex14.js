/**
 * URL 다루기
 * 
 */

var url = "http://www.mysite.com/user?name=둘리&no=10&email=zzzmm21@gjdj.com";

// 1. escape: URL 전부를 encoding, 사용(x), deprecated
var url2 = escape(url);
console.log(url2);


// 2. encodeURI: URL 중파라미터만 encoding 하기 때문에 URL 전체를 encoding 해야 하는 경우 , 사용(o)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 Encoding해야 하는 경우, 사용(o)
// 잘못 사용한 경우
var url4 = encodeURIComponent(url);
console.log(url4);

// 4.
// 만들어야할 URL
// http://www.mysite.com/user?name=둘리&no=10&email=zzzmm21@gjdj.com
var url = 'http://www.mysite.com/user';
var forDate = {
    no: 10,
    name: "둘리",
    email: 'zzzmm21@gjdj.com'
};

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
       qs.push(prop + "=" +encodeURIComponent(o[prop]));

    }
    return qs.join("&");
}
var url5 = url + "?" + toQueryString(forDate);
console.log(url5);

// jquery
// jQuery.ajax({
//     url: "",
//     type: "post",
//     date: toQueryString(forDate)
// });
