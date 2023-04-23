/*
console.log("기록중");
document.write("문서에 기록중<br>");

a=1004;
console.log(a);
document.write(a);

b="홍길동";
console.log("이름 :", b);
console.log("이름 : " + b);

document.write("<br>이름 : ", b);
document.write("<br>이름 : " + b);

console.log("이름 : " + b +", 숫자 : " + a);
document.write("<br>이름 : " + b +", 숫자 : " + a);

let c=10, d=20, e=f=30;
console.log(c, d, e, f);

c=c+100;
console.log(c);
d+=100;
console.log(d);

let a=10, b=20, sum, sub, mul, div, nam;
sum = a + b;
sub = b - a;
mul = a * b;
div = b + a;
nam = a % 3;
document.write("덧셈 : " + sum);
document.write("<br>뺄셈 : " + sub);
document.write("<br>곱셈 : " + mul);
document.write("<br>나눗셈 : " + div);
document.write("<br>나머지값 : " + nam);

let a="123", b;
b= a+100;            -에러
b= parseInt(a)+100;  -223 출력
b= Number(a) + 100;     -223 출력
document.write("" + b);
*/

/* (1)
window.onload=function(){

    let total = 0, a;
    ok.onclick=function(){
        total = parseInt(kor.value) + parseInt(eng.value) + parseInt(mat.value);
        sum.innerHTML = total;
        a = total/3;
        avg.innerHTML = a.toFixed;
    }

}
*/

/* (if, else)
window.onload=function(){
    let a=10, b=20;
    if(a>b)
        console.log("a가 크다");
    else
        console.log("b가 크다");
}
*/

/* (2)
window.onload=function(){

    let num;
    btn.onclick=function(){
        num=parseInt(inp.value);
        if(num%2 == 0)
            result.innerHTML = "짝수";
        else
            result.innerHTML = "홀수";
    }

}
*/

/* (4)
window.onload=function(){

    let pic, prev, disp, next, count=1;
    pic=document.querySelector(".pic");   //class : querySelector
    prev=document.getElementById("prev");   //id : getElementById
    disp=document.getElementById("disp");
    next=document.getElementById("next");


    next.onclick=function(){
        if(count<5)
            // count = count+1;
            // count+=1;
            count++;   //증가 연산자
        else
            count = 1;
        pic.src = "img/dog" + count + ".jpg";
        disp.innerHTML = count + " / 5";
    }

    prev.onclick=function(){
        if(count>1)
            count--;
        else
            count=5;
        pic.src="img/dog" + count + ".jpg";
        disp.innerHTML = count + " / 5";
    }

}
*/

/* (5)
window.onload=function(){

    let btn, su, price, total, su_value;
    btn = document.querySelector(".btn");
    btn.onclick=function(){
        su = document.querySelector(".su");
        total = document.querySelector(".total")
        // console.log(su.value);
        su_value = parseInt(su.value);
        // price = 5000 * su_value;
        // price = 5000 * (su.value); javascript에서만 출력 가능, 평소 parseInt를 사용하는 게 좋다 
        price = 5000 * parseInt(su.value);

        total.innerHTML = price + "원";
    }

}
*/


window.onload=function(){

    let login;
    login = document.querySelector(".login");
    at1 = document.querySelector(".at1");
        login.onclick=function(){
            at1.style.display = "block";
        }

    let ok, id, pw, id_value, pw_value;
    // id : abc, pw = 123
    ok = document.querySelector(".ok");
    id = document.querySelector(".id");
    pw = document.querySelector(".pw");
    ok.onclick=function(){
        id_value = id.value;
        pw_value = pw.value;
        // console.log("아이디 : " + id_value, "비밀번호 : " + pw_value);
        if(id.value == "abc" && pw_value == "123"){
            // && : 그리고, || : 또는
            alert("로그인 완료");
            at1.style.display="none"
        }
        else{
            alert("아이디 또는 비밀번호가 틀렸습니다")}
    }

}