(function($){ //순서가 중요하다.
  
  //① 네비게이션
  //네비게이션 : SlideDown() SlideUp()
  //$('.main-btn').stop().mouseenter(function(){
  // $('.sub').stop().slideUp(0);
  // $(this).next().slideDown(300);
    
    /*$('.main-btn').removeClass('on');
    $(this).addClass('on');
  });
  $('#nav').mouseleave(function(){
     $('.sub').stop().slideUp(300)
     $('.main-btn').delay(600).removeClass('on');

     //$('.sub').stop().slideUp(300, function(){
     //$('.main-btn').delay(600).removeClass('on'); //<-delay 후에 removeClass되도록 한다.
     //});
    */

     //부드럽게 보이고 (fadeIn(300))
     //부드럽게 사라지고 (fadOut(300))
     $('.main-btn').stop().mouseenter(function(){
      $('.sub').stop().fadeOut(0);
      $(this).next().fadeIn(300);

     $('.main-btn').removeClass('on');
     $(this).addClass('on');
   });
   $('#nav').mouseleave(function(){
      $('.sub').stop().fadeOut(300)
      $('.main-btn').delay(600).removeClass('on');
 
  // ② 메인슬라이드
    let cnt=0;
    const slideWrap =$('.slide-wrap'); //<- 변수로 만들어주기
    const n =3;//<-전체 슬라이드 개수 / const는 변화없어~! 
    //let setId=0;
    //1. 메인슬라이드 함수
      function mainSlide(){
        slideWrap.animate({left:`${-100*cnt}%`}, 600, function(){
          cnt>n-1?cnt=0:cnt;
          slideWrap.animate({left:`${-100*cnt}%`}, 0);
        })
      }
    //2. 다음카운트 함수
      function nextCount(){
        cnt++;
        mainSlide();
      }
    //3. 자동타이머 함수
      function autoTimer(){
       setInterval(nextCount, 3000);
      }
      //autoTimer();

    });
     // 공지사항 & 갤러리 탭 메뉴 이벤트
     //갤러리 버튼 클릭
      $('.gallery-btn').click(function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.gallery-box').addClass('on');
        $('.notice-box').addClass('on');
      })
    //공지사항 버튼 클릭
      $('.notice-btn').click(function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.gallery-box').removeClass('on');
        $('.notice-box').removeClass('on');
      })


    //팝업창(모달창) 레이어 팝업 열기
    $('.link-btn').click(function(){
      $('#modal').stop().fadeIn(300);
    })
    //팝업창(모달창) 레이어 팝업 닫기
    $('.close-btn').click(function(){
      $('#modal').stop().fadeOut(600);
    })

})(jQuery);