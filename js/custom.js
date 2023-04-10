$(function(){
  //메뉴 나타나기//
  $(".menu_btn").mouseover(function(){
    $('.gnb').addClass('on')    
  })
    

  $(".menu_btn").click(function(){
    $('.gnb').removeClass('on')
  })

//메뉴 호버시 색상변화//
$(".gnb	li a").hover(function(){
  $(".gnb	li a").removeClass("active")
  $(this).addClass("active")  
}, function(){  
  $(".gnb	li a").removeClass("active")
})

//슬라이드 이동//
    var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		  },
		  navigation: {
			nextEl: '.next_btn',
			prevEl: '.prev_btn',
		  },
    });

//원하는 슬라이드로 이동//
$('.gnb li').click(function(){
  swiper.slideTo($(this).index());
  $(".menu_bg").animate({"left":"-100%"},500);
  $(".menu_btn").removeClass("open");
})

// $('.section01').mousemove(function(e) {
//   TweenMax.to($('.cursor'), 0.5, {
//       x: e.clientX-410,
//       y: e.clientY-120,
//       ease: Power3.easeOut
//   });
// });


})
