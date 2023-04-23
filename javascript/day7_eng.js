window.onload=function(){

}


// JQeury 전용
$(function(){
    $("nav div").on("click", function(){
        $(".at").hide(); // 모든 아티클이 안 보이게 한다
        n=$(this).index(); // 몇 번째 메뉴를 눌렀는지 찾는다
        $(".at"+n).show(); // 누른 메뉴의 아티클만 보이게 한다
        // if(n==1){
        //     $(".at1").css("display", "flex");
        // }
    })
})

    $("#menu div").on("click", function(){ //li를 눌렀을 때 보여주기
        $(".at").hide();
        n=$(this).index(); //클릭한 사진의 번호 찾기
        if(n==4){
            $(".tab").show(); 
        }