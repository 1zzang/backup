const macA={
    menuA:[
        "로고", "Store", "New", "Story",
        "햄버거", "음료", "지점안내", "고객센터"
    ], // [] 사용하여 배열로 잡기
    sub0A:[
        "버거", "맥런치", "맥모닝"
    ],
    sub1A:[
        "버거", "맥런치", "맥모닝", "해피스낵"
    ],
    sub2A:[
        "버거", "맥런치"
    ],
    sub3A:[
        "버거", "맥런치", "맥모닝"
    ],
    sub4A:[
        "버거", "맥런치"
    ],
    sub5A:[
        "버거", "맥런치", "맥모닝", "기타"
    ],
    mdBoxA:[
        "md0.jpg", "md1.jpg", "md2.jpg", "md3.jpg", "md4.jpg"
    ],
    at17PumA:[
        "노랑", "파랑", "세사람", "제품들", "두개", "햄버거"
    ],
    at17ImgA:[
        "md0.jpg", "md1.jpg", "md2.jpg", "md3.jpg", "md4.jpg", "md5.jpg"
    ],
    at17PriceA:[
        100, 250, 350, 400, 500, 600
    ]
}

let i, no, str="", nav, sub0, sub1, sub2, sub3, sub4, sub5, img5Box;
    // 기본적으로 사용하는 변수 : i, no, str="" 등.
window.onload=function(){ 
    nav=document.getElementById("nav").getElementsByTagName("div");
    macA.menuA.forEach((item, ind) => {
        nav[ind].innerHTML=macA.menuA[ind];
    })

    sub0=document.querySelector(".sub0").getElementsByTagName("li");
    sub1=document.querySelector(".sub1").getElementsByTagName("li");
    sub2=document.querySelector(".sub2").getElementsByTagName("li");
    sub3=document.querySelector(".sub3").getElementsByTagName("li");
    sub4=document.querySelector(".sub4").getElementsByTagName("li");
    sub5=document.querySelector(".sub5").getElementsByTagName("li");

    macA.sub0A.forEach((item, ind) => {
        sub0[ind].innerHTML=macA.sub0A[ind];
    })
    macA.sub1A.forEach((item, ind) => {
        sub1[ind].innerHTML=macA.sub1A[ind];
    })
    macA.sub2A.forEach((item, ind) => {
        sub2[ind].innerHTML=macA.sub2A[ind];
    })
    macA.sub3A.forEach((item, ind) => {
        sub3[ind].innerHTML=macA.sub3A[ind];
    })
    macA.sub4A.forEach((item, ind) => {
        sub4[ind].innerHTML=macA.sub4A[ind];
    })
    macA.sub5A.forEach((item, ind) => {
        sub5[ind].innerHTML=macA.sub5A[ind];
    })


    img5Box=document.querySelector(".img5Box").getElementsByTagName("li");
    
    macA.mdBoxA.forEach((item, ind) => {
        img5Box[ind].style.background="url(img/"+macA.mdBoxA[ind]+")";
        img5Box[ind].style.backgroundSize="100% 100%";
    })

    // 아티클-18번 그림 5개 넣기
    at18_box_img5=document.querySelector(".at18_box_img5").getElementsByTagName("li");
    macA.mdBoxA.forEach((item, ind) => {
        at18_box_img5[ind].style.background="url(img/"+macA.mdBoxA[ind]+")";
        at18_box_img5[ind].style.backgroundSize="100% 100%";
    })
}


// 타이머를 맞춰서 사진을 이동시키는 애니메이션
let timer=setInterval("show()", 5000); // 일정 시간 간격으로 일처리를 반복 동작
let count=0;
function show(){
    if(count < 4)
        count++;
    else
        count=0;
    $(".choose li").css("background", "white");
    $(".choose li:eq(" + count + ")").css("background", "red");
    $(".img5Box").animate({"left":"-=100%"}, 1000, function(){
        $(".img5Box li:first").appendTo(".img5Box");
        $(".img5Box").css("left", "+=100%");
    });
    // -= : 왼쪽으로 이동, += : 오른쪽으로 이동
}

$(function(){
    // 그림 위에 커서를 올려두면 시간이 지나도 사진이 고정됨
    $(".img5Box").hover(function(){
        clearInterval(timer);
    }, function(){
        timer=setInterval("show()", 5000);
    })

    //아티클-0에서 자동 그림 이동 (silde)    
    $(".choose li:eq(0)").css("background", "red");
    $(".subBox ul li").on("click", function(){
        no=$(this).attr("class").substr(4, 2);
        // console.log(no);
        // if(no == 17)
        //   $(".at17").css("display", "flex");
        $(".at").hide();
        $(".at"+no).show();
    }) // attr : 속성  // substr(n, 1) : n번째부터 1개 가져오기
})



$(function(){
    // 아티클-17에서 6개의 배걍그림 불러오기
    let at17_no, at17_su;
    for(i=0; i<macA.at17ImgA.length; i++){
        $(".at17_left > div:eq(" + i + ")").css("background", "url(img/"+macA.at17ImgA[i]+")")
                                         .css("backgroundSize", "100% 100%");
    }
    // 6개 그림을 클릭하면
    $(".at17_left > div").on("click", function(){
        let no;
        at17_no=$(this).index();
        // console.log(macA.at17PriceA[at17_no]);
    // 오른쪽에 상품명이 나옴    
        $(".at17_pum").html("상품명 : " + macA.at17PumA[at17_no]);
    })

    $(".at17_ok").on("click", function(){
        su=$(".at17_su").val(); //input에서 불러올 땐 val()을 사용한다
        kum = macA.at17PriceA[at17_no] * su;
        $(".at17_price").html(kum+"원");
        $(".at17_result").html("<p>" + macA.at17PumA[at17_no] + "</p>" + kum + "결제완료");
        $(".at17_popup").show();
    })

    $(".at17_popup_close").on("click", function(){
        $("at17_popup").hide();
    })


    // 아티클-18에서 라디오버튼(옵션) 클릭으로 그림 이동(slide)
    $("#at18_choose2 li").on("click", function(){
        no=$(this).index();
        $("#at18_choose2 li").css("background", "white");
        $("#at18_choose2 li:eq(" + no + ")").css("background", "red");
        pos=-1000 * no;
        $(".at18_box_img5").animate({"left": pos+"px"}, 500);
    })


    // 아티클-19
    $(".at19_menu > li").on("click", function(){
        // ">"를 사용하면 해당 부모 태그 안에 있는 자식 태그만 선택
            $(".at19_menu li").css("background", "white");
            $(this).css("background", "#FFBC0E");
            no=$(this).index();
            $(".at19_menuBox").hide();
            $(".at19_menuBox"+no).show();
        })
    })