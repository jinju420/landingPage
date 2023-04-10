$(function(){       
    //header
    $('header').hover(function(){
      $('header').addClass('hover')        
    },function(){
      $('header').removeClass('hover')  
    })
    $('header .gnb li').mouseover(function(){
      var tab_name = $(this).data('tab')      

      if($('.header_menu').hasClass('active')){
        // $('.header_menu').removeClass('active2')
        // $(tab_name).addClass('active2')
        $('.header_menu').removeClass('active')
        $(tab_name).addClass('active')
      }else {
        $(tab_name).addClass('active')
      }
    })
    $('header').mouseleave(function(){
      $('.header_menu').removeClass('active')
    })
    
    $('header .gnb .on').mouseover(function(){
      $('.header_menu').removeClass('active')       
    })
    

    $('.header_menu .title_menu a').hover(function(){      
      var tab_title = $(this).data('tab')
      $('.header_menu .product_sub').removeClass('on')
      $(tab_title).addClass('on')
    })


    var swiper = new Swiper(".img_area", {
      spaceBetween: 30,
      pagination: {
        el: ".pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    
    //cursor
    $('.main_vis').mouseover(function(){
      $('.main_vis .cursor').addClass('on')
    })
    //main_vis cursor
    $('.main_vis .btn').hover(function(){
      $('.main_vis .cursor').fadeIn(300)
      if($(this).hasClass('prev')){
        $('.main_vis .cursor').removeClass('next')
      }else{
        $('.main_vis .cursor').addClass('next')
      }
    },function(){
      $('.main_vis .cursor').fadeOut(300)
    })
    $('.main_vis').mousemove(function(e){
      gsap.to('.main_vis .cursor',{
        x:e.clientX-25,
        y:e.clientY-25,
      })
    })

    var swiper = new Swiper(".main_slide", {   
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },       
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });

    //product
    $('.product .content_slide').hover(function(){
      $('.product .cursor').addClass('on')     
    },function(){
      $('.product .cursor').removeClass('on')
    })
      
    $('.product .content_slide').mousemove(function(e){
      gsap.to('.product .cursor',{
        x:e.clientX-60,
        y:e.clientY-60,
      })
    })
    var swiper = new Swiper(".content_slide", {
      slidesPerView: 'auto',
      spaceBetween: 30, 
    });


    //fashion 
    $('.fashion ul').find('li').click(function(e){
      e.preventDefault();
      //$(this).find('a').addClass('active')
    })
    //click
    $('.fashion .fashion_nav a').click(function(){
      if($('.fashion_nav a').hasClass('active')){
        $('.fashion_nav a').removeClass('active')
        $(this).addClass('active')
      }else{
        $('.fashion_nav a').removeClass('active')
      }
    })
    //tab
    $('.fashion .fashion_nav li').click(function(e){
      e.preventDefault();   
      
      tab_name = $(this).data('tab') 
      if($('.fashion .inner').hasClass('show')){
        $('.fashion .inner').removeClass('show')
        $(tab_name).addClass('show')
      }else{
        $(tab_name).addClass('show')
      }
    })

    //video_pop
    //video_pop 계속 재생되지 않게
    $('.video #playBtn').click(function(e){
      e.preventDefault()
      $('.video_pop').addClass('on')
      $('.video_pop').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/4uFv6pJbqZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
    $('.video .close').click(function(e){
      e.preventDefault()
      $('.video_pop').removeClass('on')
      $('.video_pop iframe').remove()
    })


    //product_cate -btn
    $('.product_cate .btn').hover(function(){
      $('.product_cate .cursor').fadeIn(300)
      if($(this).hasClass('prev')){
        $('.product_cate .cursor').removeClass('next')
        $('.product_cate .cursor').addClass('on') 
      }else{
        $('.product_cate .cursor').addClass('next')
        $('.product_cate .cursor').addClass('on') 
      }
    },function(){
      $('.product_cate .cursor').fadeOut(300)
    })
    $('.product_cate').mousemove(function(e){
      gsap.to('.product_cate .cursor',{
        x:e.clientX-30,
        y:e.clientY-30,
      })
    })
    $('.product_cate .cate_nav .cate_img').click(function(e){
        e.preventDefault();
    })
    $('.product_cate .cate_nav .cate_img').click(function(e){
        e.preventDefault();
    })
        
    //cata_tab
    menu_arr = ['아이웨어','주얼리','와치','향수','메이크업','스킨케어']
    var swiper = new Swiper(".cate-slide", {      
      pagination: {
        el: ".product_cate .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {         
          return '<span class="' + className + '">' + menu_arr[index] + "</span>";
        
      },
    },
    cssMode: true,
      slidesPerView: 1,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },    
  });
    
    //background
      gsap.to('.background img',{
        scrollTrigger: {
          trigger: ".background",
          //pin: true,   // pin the trigger element while active
          start: "top 80%", // when the top of the trigger hits the top of the viewport
          end: "+=500", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          //markers:true,
        },
        scale:1.2
      })   
 
  //scroll
  $(window).scroll(function(){
    st = $(this).scrollTop();
    //alert(st)
   
    if(st > 0){
      $('header').addClass('hide')
    }else{
      $('header').removeClass('hide')
    }

    img = $('.product .content_slide').offset().top;        
    drag = $('.product .drag').offset().top;        
    ct02 = $('.fashion .content02').offset().top;        
    ct03 = $('.fashion .content03').offset().top;        
    modern_gnb = $('.fashion').offset().top;        
    m = $('.fashion').find('p').offset().top;               
    product = $('.video').find('p').offset().top; 
    product2 = $('.video').find('.img_area').offset().top;        
    bg = $('.pick_title').offset().top;       
    maz = $('.background').offset().top;  
    chat = $('.contents_box').find('.txt_area').offset().top; 
    //alert(chat)

    if(st >= m){          
      $('.video').addClass('on')
    }
    if(st >= product){          
      $('.product_cate').addClass('on')
    }
    if(st >= product2){          
      $('.product_cate').find('.pick_title').addClass('on')
    }
    if(st >= bg){          
      $('.background').addClass('on')
    }
    if(st >= maz){          
      $('.magazine').addClass('on')
    }     
    if(st >= 500){          
      $('.product').addClass('on')
    }             
    if(st >= img){          
      $('.fashion .content01').addClass('active')
    }else{
      $('.fashion .content01').removeClass('active')
    }
    if(st >= drag){
      $('.fashion .content02').addClass('on')
    }else{
      $('.fashion .content02').removeClass('on')
    }
    if(st >= drag){
      $('.fashion .content02').addClass('on')
    }else{
      $('.fashion .content02').removeClass('on')
    }
    if(st >= ct02){
      $('.fashion .content03').find('h2').addClass('on')
    }else{
      $('.fashion .content03').find('h2').removeClass('on')
    }
    if(st >= ct02){
      $('.fashion .content03').addClass('on')
    }else{
      $('.fashion .content03').removeClass('on')
    }        
    if(st >= modern_gnb-100){
      $('.fashion_nav').addClass('fix')
    }else{
      $('.fashion_nav').removeClass('fix')
    }        
    if(st >= ct03){
      $('.fashion').find('ul').addClass('remove')
    }else{
      $('.fashion').find('ul').removeClass('remove')
    }       
    if(st >= chat){
      $('.chat').addClass('on');
    }else{
      $('.chat').removeClass('on');
    }
  })//scroll

  
    
})//끝   