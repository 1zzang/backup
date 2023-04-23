/* (1)
window.onload=function(){
    $(".btn").on("click", function(){
        $("#img").hide();
    })
}         // $ = JQuery
*/

/*
let i;
window.onload=function(){

    document.write("<br> 자동차 -0");
    document.write("<br> 자동차 -1");
    document.write("<br> 자동차 -2");
    document.write("<br> 자동차 -3");
    document.write("<br> 자동차 -4");


    for(i=1; i<=5; i++)
    //   1     2    4
    document.write("<br> 자동차 -" +i);
    //                    3
    // 실행 순서 : 1234-> 234-> 234 -> 234


    for(i=0; i<5; i++)
    //{}를 사용하면 여러개를 실행할 수 있다
    document.write("<br> 자동차 -" + (i+1));


// 1부터 100까지 출력하기
    for(i=1; i<=100; i++)
    document.write(i + ", ");

// 1부터 100까지 합계 출력하기 (1+2+3+...+100)
    let sum=0;
    for(i=1; i<=100; i++)
        sum+=i;    // sum = sum + 1; - 누적 연산
    document.write("<br> 1~100 합 : " + sum);

    for(i=1; i<=9; i++)
    document.write("<br>"+3+"*"+i+"="+3*i);
*/

/* (2)
    let box=document.querySelector(".box");
    let str="";
    for(i=1; i<=9; i++)
        str += "<br> 3 * " + i + "=" + 3*i;
    box.innerHTML = str;


    let num, ok, str="", box;
    ok=document.querySelector(".ok");
    num=document.querySelector(".num");
    box=document.querySelector(".box");

  방법 - 1
    ok.onclick=function(){
        str="";
        n = num.value;
        for(i=1; i<=9; i++){
            str += "<br>" + n + "*" + i + "=" + n*i;
        }
    box.innerHTML = str;
    }

  방법 -2  //onclick 대신 addEventListener도 사용 가능
    ok.addEventListener("click", function() {
        str="";
        n = num.value;
        for(i=1; i<=9; i++){
            str += "<br>" + n + "*" + i + "=" + n*i;
        }
    box.innerHTML = str;
    })

  방법 -3
    let ok; // addEventListener를 실행하기 위해서 ok는 남겨두어야 한다.
    ok=document.querySelector(".ok");
    ok.addEventListener("click", func);
}

function func(){ 

    let num, str="", box;
    num=document.querySelector(".num");
    box=document.querySelector(".box");

    str="";
    n = num.value;
    for(i=1; i<=9; i++){
        str += "<br>" + n + "*" + i + "=" + n*i;
    }
    box.innerHTML = str;
}
*/

/* (3)
let i;
const imgTextA=[
    "매화", "나비와 꽃", "벚꽃", "봄", "새싹"
]
window.onload=function(){
    let imgBox;
    imgBox=document.querySelector(".imgBox").getElementsByTagName("li");
    for(i=0; i<5; i++){
        imgBox[i].style.background="url(img/spr"+i+".jpg)";
        imgBox[i].style.backgroundSize="100% 100%";
        // [n] : 배열
    }

    let img, imgText;
    img=document.getElementsByClassName("img");
    imgText=document.getElementsByClassName("imgText");
    for(i=0; i<5; i++){
        img[i].style.background="url(img/spr"+i+".jpg)";
        img[i].style.backgroundSize="100% 100%";
        imgText[i].innerHTML = imgTextA[i];
        //javascript에서 css에 접근하려면 .style 사용
    }
}

    하나씩 읽어들임
        querySelector(".img");
        querySelector("#img");

        getElementById("img");

    클래스만 여러개 읽어들임
        getElementClassName("img");
        getElementTagName("li");

*/



window.onload=function(){
    let leftImg;
    const leftImgA=["spr1.jpg", "spr2.jpg", "spr3.jpg"]
    const leftImg_flrA=[
        "꽃과 나비", "벚꽃", "봄"
    ]
    const leftImg_priceA=[
        25000, 35000, 45000
    ]
    
    leftImg=document.querySelector(".left").getElementsByTagName("li");
    for(i=0; i<leftImgA.length; i++){
        // length : 배열의 크기와 같은 의미를 가진다.
        leftImg[i].style.background="url(img/" + leftImgA[i] +")";
        leftImg[i].style.backgroundSize="100% 100%";
    }

    // JQuery 사용 - $  (코드의 간소화)
    $(".left li").on("click", function(){
        no=$(this).index();
        // console.log(no);
        // 여기서 this는 click한 li를 가르킴
        // index : 검색을 빠르게 하기 위한 속성
        $(".pic").attr("src","img/"+leftImgA[no]);
        $(".flr").text(leftImg_flrA[no]);
        $(".price").text(leftImg_priceA[no]);
    })
}