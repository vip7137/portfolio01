/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

/*유튜브 모달창 띄우기*/
$(".popupModalVideo  a").click(function() {
    $(".video_modal_popup").addClass("reveal"),
    $(".video_modal_popup .video-wrapper").remove(),
    $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560'height='315' src='https://youtube.com/embed/"+ $(this).data("video")+"?rel=0&playsinline=1&autoplay=1'allow='autoplay;encrypted-media'allowfullscreen></iframe></div>")
});
$(".video_modal_popup-closer").click(function() {
    $(".video_modal_popup .video-wrapper").remove(),
    $(".video_modal_popup").removeClass("reveal")
});

/* 시간 표시하는 부분 */
$(document).ready(function(){  			


	/* 1초 마다 현재 시간값 재설정 */
	var timer = setInterval(function(){  // 변수 timer에 setInterval 구문을 실행
		
		var now = new Date();
		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();	
		
		// 시간이 한자리 숫자일때 앞에 0 붙이기
		if(hr >=10){	
			hNum = hr;			
		}else{
			hNum = "0"+hr;
		};
		
		// 분이 한자리 숫자일때 앞에 0 붙이기
		if(min >=10){
			mNum = min;
		}else{
			mNum = "0"+min;
		};
		
		// 초가 한자리 숫자일때 앞에 0 붙이기
		if(sec >=10){
			sNum = sec;
		}else{
			sNum = "0"+sec;
		};
				
		// p 태그 안에 시간 출력		
		$("p span").eq(0).text(hNum);
		$("p span").eq(1).text(mNum);
		$("p span").eq(2).text(sNum);		
		
	},1000)  //1초의 시간마다 안쪽의 구문을 반복 실행

    var now = new Date();
    var hr = now.getHours();
  
    /* 시간에 따라 화면 테마 변경 */
    if(hr>=0 && hr<11){   //현재 시간이 0시 보다는 같거나 크고, 11시 보다는 작을때
         $("#wrap").removeClass();
         $("#wrap").addClass("morning");
     }else if(hr>=11 && hr<16){   //현재 시간이 11시 보다는 같거나  크고, 16시 보다는 작을때
         $("#wrap").removeClass();
         $("#wrap").addClass("afternoon");
     }else if(hr>=16 && hr<20){   //현재 시간이 16시 보다는 같거나 크고, 20시 보다는 작을때
         $("#wrap").removeClass();
         $("#wrap").addClass("evening");
     }else if(hr>=20 && hr<0){   //현재 시간이 20시 보다는 같거나 크고, 24시 보다는 작을때
         $("#wrap").removeClass();
         $("#wrap").addClass("night");
     };
});

// 스크롤 높이 확인
$(window).on("scroll",function(){
    var sc_top=$(this).scrollTop();

    $(".top").text(sc_top); // text(값)는 javascript의 'innerText=값' 과 같은 역할

    console.log($(this).scrollTop());
})

//스크롤 높이에 따른 이벤트 발생
$(document).ready(function(){
    $(window).scroll(function(){

        if($(this).scrollTop()>140){
            $("h2").css({"transition":"2s"}).addClass(" animate__backInUp");
            $("p").css({"transition":"2s"}).addClass(" animate__fadeInUp");
            $("p").css({"transition":"2s"}).addClass(" animate__fadeInUp");
        }
    
    });
});