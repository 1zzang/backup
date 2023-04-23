const menuA=[
    "로고", "제품안내", "주문안내", "갤러리",
    "배송조회", "로그인", "English"
]

const codeA=["100", "101", "102", "103", "104"];
const nameA=["홍길동", "이동수", "김철수", "강호동", "유재석"];
const addrA=[
    "서울시 강남구 개포동 123",
    "서울시 서초구 상수동 100",
    "서울시 마포구 성수동 250",
    "서울시 강남구 등촌동 15",
    "서울시 송파구 가락동 2785"
];
const telA=["010-0000-0000", "010-0000-0000", "010-0000-0000", "010-0000-0000", "010-0000-0000"]
const magA=["담당자", "담당자", "담당자", "담당자", "담당자"];


window.onload=function(){
    let i, menu;
    menu=document.getElementById("menu").getElementsByTagName("div");
    // menu=document.querySelector(".m").getElementsByTagName("div");
    // id를 써도 되고 class를 써도 되지만 id를 사용하는 편이 낫다

    // for(i=0; i<menuA.length; i++){
    //     menu[i].innerHTML=menuA[i];
    // }

    // menuA.forEach(function(item, ind){
    //         // console.log(item, ind)
    //         menu[ind].innerHTML=menuA[ind];
    //     });
    // fotEach : 배열을 처리할 떄 많이 사용 (for보다 처리가 빠름)
    // item (value) : 메뉴에 들어가있는 요소
    // ind (index) : 검색 속도를 높이기 위한 번호

    menuA.forEach((item, ind) => {
        menu[ind].innerHTML=menuA[ind];
    })
    // function 대신 사용 가능한 "=>" 화살표 함수


    let code, name, addr, tel, mag;
    code=document.getElementsByClassName("code");
    na=document.getElementsByClassName("name");
    addr=document.getElementsByClassName("addr");
    tel=document.getElementsByClassName("tel");
    mag=document.getElementsByClassName("mag");

    codeA.forEach((item, ind) => {
        code[ind].innerHTML=codeA[ind];
    })
    nameA.forEach((item, ind) => {
        na[ind].innerHTML=nameA[ind];
    })
    // addrA.forEach((item, ind) => {
    //     addr[ind].innerHTML=addrA[ind];
    // })
    // telA.forEach((item, ind) => {
    //     tel[ind].innerHTML=telA[ind];
    // })
    // magA.forEach((item, ind) => {
    //     mag[ind].innerHTML=magA[ind];
    // })
    for(i=0; i<addrA.length; i++){
        addr[i].innerHTML=addrA[i];
        tel[i].innerHTML=telA[i];
        mag[i].innerHTML=magA[i];
    }

    // 배송 메뉴 클릭 시 전체 회원 나오기
    $("#menu div").on("click", function(){
        $(".at").hide();
        n=$(this).index();
        $(".tab").show();  // 메뉴를 누르면 표가 나타남
    })

    $(".close").on("click", function(){
        $(".tab").hide(); // 닫기 버튼 누르면 사라짐
    })

    const obj={
        name: "홍길동",
        age: 20,
        city: "서울",
        data: ["강남", "송파", "수원"]
    }
    
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.city);
    console.log(obj.data[0]);
    console.log(obj.data[1]);

    console.log("------for in------");
    for(n in obj.data){
        console.log(obj.data[n]);
    }

    console.log("------forEach------");
    obj.data.forEach((item, ind) => {
      console.log(obj.data[ind]);  
    })
 
    console.log("------for------");
    for(i=0; i<obj.data.length; i++){
        console.log(obj.data[i]);
    }

    /*
    let space=document.getElementsByClassName("space");
    
    // 개별적으로 출력하기
    space[0].innerHTML=obj.name;
    space[1].innerHTML=obj.age;
    space[2].innerHTML=obj.city;

    // 반복문으로 오브젝트 안에 배열 출력하기
    for(i=0; i<obj.data.length; i++)
        space[i].innerHTML=obj.data[i];
    
    obj.data.forEach((n, i) => {
        space[i].innerHTML=obj.data[i]+"-forEach" + "값 : " + n;
    })
*/

    // 제품안내 메뉴에서 그림 8개 만들기 프로그램 시작
    const pumA={
        img:[
            "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
            "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"
        ],
        title:[
            "상품명 : 1번", "상품명 : 2번",
            "상품명 : 3번", "상품명 : 4번",
            "상품명 : 5번", "상품명 : 6번",
            "상품명 : 7번", "상품명 : 8번"
        ],
        sizeA:[
            "사이즈 : 150cm", "사이즈 : 250cm",
            "사이즈 : 350cm", "사이즈 : 450cm",
            "사이즈 : 550cm", "사이즈 : 650cm",
            "사이즈 : 750cm", "사이즈 : 850cm"
        ],
        colorA:[
            "색 상 : 빨강", "색 상 : 파랑",
            "색 상 : 노랑", "색 상 : 초록",
            "색 상 : 하양", "색 상 : 보라",
            "색 상 : 분홍", "색 상 : 주황"
        ],
        priceA:[
            "가 격 : 2,500원", "가 격 : 4,500원",
            "가 격 : 5,500원", "가 격 : 6,500원",
            "가 격 : 8,500원", "가 격 : 9,500원",
            "가 격 : 10,500원", "가 격 : 12,500원"
        ]
    }

    // 제품안내 메뉴에서 그림 8개 만들기 프로그램 끝
    let pum_img;
    pum_img=document.querySelector(".at1_imgBox").getElementsByTagName("li");
    // 제품메뉴 클릭 시 나타난 8개 그림을 오브젝트에서 불러와 fotEach로 넣기
    pumA.img.forEach((item, ind) => {
        pum_img[ind].style.background="url(img/"+pumA.img[ind]+")";
        pum_img[ind].style.backgroundSize="100% 100%";
    })


    $("#menu div").on("click", function(){ //li를 눌렀을 때 보여주기
        $(".at").hide();
        n=$(this).index(); //클릭한 사진의 번호 찾기
        if(n==1){
            $(".at1").show(); 
        }

        $("#pic").attr("src","img/"+pumA.img[n]); //pic의 경로를 바꿔서 해당 순서(n)의 사진 보여주기
        
        // 큰 사진 오른쪽 상자에 텍스트 집어넣기
        $(".big_text li:eq(0)").text(pumA.title[n]);
        $(".big_text li:eq(1)").text(pumA.sizeA[n]);
        $(".big_text li:eq(2)").text(pumA.colorA[n]);
        $(".big_text li:eq(3)").text(pumA.priceA[n]);
    })

    $(".at1_imgBox").on("click", function(){
        if(n==1){
            $(".big").show(); //.big의 사진 보여주기
        }
    })

    $(".big_close").css("cursor", "pointer");
    // .css에서 사용하는 cursor: pointer;와 같은 효과
    $(".big_close").on("click", function(){
        $(".big").hide();
    })
}