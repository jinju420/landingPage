$(function(){
  //main_vis
  var main01 = new Swiper(".main_vis .main01", {   
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  var main02 = new Swiper(".main_vis .main02", {   
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  //tab
  $('.slide_wrap .tab li').click(function(e){
    e.preventDefault();

    tab_name = $(this).data('tab')
    if($('.main_slide').hasClass('on')){
      $('.main_slide').removeClass('on')
      $(tab_name).addClass('on')
    }else{
      $(tab_name).addClass('on')
    }       
  })
  
  //new_tab  
  $('.main_news .menu li').click(function(e){
    e.preventDefault();
    
    if($('.main_news .menu li').hasClass('active')){
      $('.main_news .menu li').removeClass('active')
      $(this).addClass('active')
    }else{      
      $('.main_news .menu li').removeClass('active')
      $(this).addClass('active')   
    }

    tab_title = $(this).data('tab')
    if($('.new').hasClass('on')){
      $('.new').removeClass('on')
      $(tab_title).addClass('on')
    }else{
      $(tab_title).addClass('on')
    }
  })

  
  //visual_tab
  $('.tab01').click(function(){
    $('.visual_tab01').addClass('on')
    $('.visual_tab02').removeClass('on')
  })
  $('.tab02').click(function(){
    $('.visual_tab02').addClass('on')
    $('.visual_tab01').removeClass('on')
  })
  
 
  //pause
  // $('.main_vis .pause01').click(function(e){
  //   e.preventDefault();

  //   if($(this).hasClass('on')){
  //     $(this).removeClass('on') 
  //     main01.autoplay.start();
  //   }else{
  //     $(this).addClass('on')
  //     main01.autoplay.stop();
  //   }
  // })
  // $('.main_vis .pause02').click(function(e){
  //   e.preventDefault();

  //   if($(this).hasClass('on')){
  //     $(this).removeClass('on') 
  //     main02.autoplay.start();
  //   }else{
  //     $(this).addClass('on')
  //     main02.autoplay.stop();
  //   }
  // })

  //top_btn
  $('.top_btn').click(function(e){
    e.preventDefault();
    $('body,html').animate({"scrollTop":0})

  })
})