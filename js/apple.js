// 네비게이션 바 설정
$(document).ready(function(){
    /***************************** 네비게이션 바 ***********************************************/
    $("#gnb2 .container").click(function(){
        $("#gnb2-list").slideToggle();
    });
    /***************************** 네비게이션 바  ***********************************************/

    /***************************** slider ***********************************************/
    // 이미지 슬라이드 설정
    $( '.slider' ).slick( {
        autoplay: true,  // 자동으로 넘어가기
        autoplaySpeed: 5000,  // 5초후에 넘어가기
        centerMode: true,
        centerPadding: '300px', // 양 옆의 슬라이드의 모습을 얼마나 보일지 설정
        arrows:true,
        slidesToShow: 1,      // 적은 숫자만큼 슬라이드장면 보이기
        slidesToScroll: 1,
        dots: true,
        pauseOnFocus: false,  // 마우스가 올라가면 멈출지 설정
        pauseOnHover: false,  // 마우스가 클릭하면 멈출지 설정
        responsive: [
            {
                breakpoint: 768,  // 가로 사이드로 변동되면 적용됨
                settings: {
                    slidesToShow: 1, // 적은 숫자만큼 슬라이드장면 보이기
                    centerPadding: '25px'  // 양 옆의 슬라이드의 모습을 얼마나 보일지 설정
                }
            },
                {
                breakpoint: 576,  // 가로 사이드로 변동되면 적용됨
                settings: {
                    slidesToShow: 1, // 적은 숫자만큼 슬라이드장면 보이기
                    centerPadding: '15px'  // 양 옆의 슬라이드의 모습을 얼마나 보일지 설정
                }
            }
        ]
    }) ;

    /***************************** slider ***********************************************/

    /***************************** Moblie Footer ****************************************/
    $("#btn1").on("click",function(){
        console.log("클릭");
        $("#ul1").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn2").on("click",function(){
        console.log("클릭");
        $("#ul2").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn3").on("click",function(){
        console.log("클릭");
        $("#ul3").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn4").on("click",function(){
        console.log("클릭");
        $("#ul4").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn5").on("click",function(){
        console.log("클릭");
        $("#ul5").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn6").on("click",function(){
        console.log("클릭");
        $("#ul6").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn7").on("click",function(){
        console.log("클릭");
        $("#ul7").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn8").on("click",function(){
        console.log("클릭");
        $("#ul8").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn9").on("click",function(){
        console.log("클릭");
        $("#ul9").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    $("#btn10").on("click",function(){
        console.log("클릭");
        $("#ul10").slideToggle(); // 부드럽게 오르다 내리는 기능
    })
    /***************************** Moblie Footer ****************************************/
});