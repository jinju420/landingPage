
$(function(){
  //header-메뉴클릭시
  menuAni = gsap.fromTo('header .bar_sub ul li',{
    opacity:0,
  },{
    opacity:1,
    stagger:0.2,//실행
    duration:1,//초
  })//0-100%세팅

  menuAni.pause();

  $('header #menu').click(function(e){
    e.preventDefault();    
    
    $(this).toggleClass('close');
    $('header .bar_sub').toggleClass('on')    
    $('header .logo_area').find('.shop').toggleClass('on')   
    $('header .logo_area .shop_sub, .all_bg').removeClass('on')
    menuAni.restart();//항상재실행

  })

  //장바구니 클릭시
  $('header .logo_area .shop').click(function(e){
    e.preventDefault();   
    $('header .logo_area .shop_sub, .all_bg').toggleClass('on')
  }) 

  subAni = gsap.fromTo('header .arrow_sub ul li',{
    opacity:0,
  },{
    opacity:1,
    stagger:0.2,
    duration:1,
  })
  subAni.pause();
  //arrow
  $('header .arrow').click(function(e){
    e.preventDefault();
    $('header .arrow_sub').toggleClass('on')
    $(this).toggleClass('on')
    subAni.restart();
  })

  
  //main_vis 스크롤시 텍스트 좌표 이동-scrollTrigger -> documentation
  //주소 찾는 건 -> CDN
  gsap.to('.main_vis .txt01',{//누구에게 줄거냐
    scrollTrigger:{
      trigger:'.main_vis',//어디서시작
      start:'top top',//시작점 / 브라우저에서 시작지점
      end:'+=500',//스크롤 값 (500에서 모션이 끝난다)
      //markers:true,
      scrub:1//스크롤 할때
    },
    x:'100%',
    y:'-250%',
    duration:2,
  })
  gsap.to('.main_vis .txt02',{
    scrollTrigger:{
      trigger:'.main_vis',//언제시작
      start:'top top',//시작점 / 브라우저에서 시작지점
      end:'+=500',//스크롤 값 (500에서 모션이 끝난다)
      //markers:true,//좌표보여주기
      scrub:1//스크롤 할때
    },
    x:'0',
    y:'0',
    rotation:'-30deg',
    duration:2,
  })

  //product swiper products
  var swiper = new Swiper(".products.swiper", {      
   slidesPerView:'1.2',//auto로 비율 수정가능
   spaceBetween:20,
   scrollbar: {
    el: ".swiper-scrollbar",
    //hide: true,
    },
  });

  //wear
  $('.wear .play_btn').click(function(e){
    e.preventDefault();
    src = $(this).data('youtube');
    //alert(src)
    $('.wear .video_pop').addClass('on')    
    $('.wear .iframe').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+src+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  })
  $('.wear .close_btn').click(function(e){
      e.preventDefault();
      $('.wear .video_pop').removeClass('on')
      $('.wear iframe').remove()
  })
  
  var swiper = new Swiper(".main_slide", {   
    slidesPerView:1.2,   
    spaceBetween:20,
    centeredSlides: true,   
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },   
    //슬라이드가 됐을 때 (API -> Events -> on)
    on:{
      //처음켜고 초기값 세팅
      init:function(){
        //현재 슬라이드 몇번째인가
        //alert(this.realIndex);//리얼 index 생성된 고유의 index
      },
      slideChange:function(){
        //alert(this.realIndex);
        imgSrc = $('.main_slide .swiper-slide').eq(this.realIndex).find('img').attr('src');
        $('.wear .bg').attr('src',imgSrc);
      }

    }
  });

  //chat  
  $('.chat > ul > li').click(function(e){
      e.preventDefault()
      $('body').addClass('hidden')
  
      tab_name = $(this).data('tab')
      if($(this).hasClass('on')){
        $('.chat .container').removeClass('on')
        $(tab_name).addClass('on')
      }else{
        $(tab_name).addClass('on')
      }        
  })
  $('.chat .container .close').click(function(e){
      e.preventDefault()
      
      $('body').removeClass('hidden')
      $('.chat .container').removeClass('on')    
  })
  //click
  $('.label_style').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active')
  })

  //footer
  $('footer .cate > ul > li').find('a').click(function(e){
    e.preventDefault();
       
    h = $(this).siblings('.sub').find('ul').height();
    // //alert(h)
    if($(this).siblings('.sub').height() > 0){
      $('footer .sub').stop().animate({height:0})
    }else {
      $('footer .sub').stop().animate({height:0})
      $(this).siblings('.sub').stop().animate({height:h})
    }      
  })


  
  
})//끝
