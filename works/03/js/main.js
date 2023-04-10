$(function(){
  //header
  $('header .title').mouseover(function(){   
    tab_title = $(this).data('tab')

    if($('.nav_sub').hasClass('active')){
      $('.nav_sub').removeClass('active')
      $(tab_title).addClass('active')
    }else{
      $(tab_title).addClass('active')
    }    
  })
  //header /nav_sub
  $('header').mouseleave(function(){
    $('.nav_sub').removeClass('active')
  })
  $('header .navi').hover(function(){
    $('.all_bg').toggleClass('on')
  })
  $('header .menu').click(function(e){
    e.preventDefault();
    
    $('body').toggleClass('hidden')
    $('header .tab_menu').toggleClass('on')
    $(this).toggleClass('on')
  })
  //header /.tab
  $('header .tab').click(function(e){
    e.preventDefault();
    h = $(this).siblings('.list').find('ul').height();

    if($(this).siblings('.list').height() > 0){
      $('.list').stop().animate({height:0})
    }else{
      $('.list').stop().animate({height:0})
      $(this).siblings('.list').stop().animate({height:h})
    }
    $(this).toggleClass('on')
  })

  //footer
  $('footer .title').click(function(e){
    e.preventDefault();

    h = $(this).siblings('.sub_list').find('ul').height();

    if($(this).siblings('.sub_list').height() > 0){
      $('.sub_list').stop().animate({height:0})
    }else{
      $('.sub_list').stop().animate({height:0})
      $(this).siblings('.sub_list').stop().animate({height:h})
    }
    $(this).toggleClass('on')
  })

  //main_vis
  var main_slide = new Swiper(".main_slide", {  
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main_vis .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main_vis .swiper-button-next",
      prevEl: ".main_vis .swiper-button-prev",
    },
  });

  $('.main_vis .stop').click(function(e){
    e.preventDefault()

    //있냐 없냐 만약에 없으면 else로 가서 else실행
    //있냐 없냐 만약에 있으면 if에서 바로 실행
    if($(this).hasClass('on')){//정지된 상태 한번 눌렀을 때
      $(this).removeClass('on')
      main_slide.autoplay.start();

    }else{//재생되고 있는 상태 처음키자마자
      $(this).addClass('on')
      main_slide.autoplay.stop();
    }
  })  
  

  //social
  $('.social .bg').hover(function(){    
    index = $('.social .bg').index(this)    
    $('.social .bg .plus').eq(index).toggleClass('on')
  })
  
  //more
  $('.more').hover(function(){
    $(this).toggleClass('on')
  })
 
  //top_btn   
  $('.top_btn').click(function(e){    
    e.preventDefault();

    $('html,body').animate({'scrollTop':0})        
  })
  $(window).scroll(function(){
    if($(this).scrollTop() == 0){
      $('.top_btn').fadeOut()
    }else{
      $('.top_btn').fadeIn()
    }
  })  

  //pagination-slide
  //new_product
  menu_arr = ['신제품 출시','나만의 인테리어','신혼 혼수템','선물 추천템']
  var swiper = new Swiper(".new_slide", {
      
      pagination: {
        el: ".new_product .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";
          
      },
    },
    autoHeight: true,
  });

//recom
menu_arr = ['주방가전','생활가전','에어가전']
  var swiper = new Swiper(".recom_slide", {
      spaceBetween: 30,
      pagination: {
        el: ".recom .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";
        
      },
    },
  });
  
//kitchen
menu_arr = ['BESPOKE 냉장고','전기레인지','전자레인지','식기세척기']
  var swiper = new Swiper(".kitchen_slide", {
      pagination: {
        el: ".kitchen .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";

      },
    },
  });

//contents
menu_arr = ['세탁기','건조기','TV','청소기','LED조명']
  var swiper = new Swiper(".contents_slide", {
      pagination: {
        el: ".contents .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";
        
      },
    },
  });

//air
menu_arr = ['공기청정기','에어드레서','슈드레서','시스템 제습기']
  var swiper = new Swiper(".air_slide", {
      pagination: {
        el: ".air .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";
          
      },
    },
  });

//social
menu_arr = ['Today 스토리','비즈니스 서비스','제품 리뷰']
  var swiper = new Swiper(".social_slide", {
      scrollbar: {
        el: ".social .swiper-scrollbar",
        //hide: true,
      },
      pagination: {
        el: ".social .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";
          
      },
    },
  });  


})//end