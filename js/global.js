$(document).ready(function(){

    var searchBox = $('.search_word_list ul.si_type1');
    var zero = 0;

    function listNum(){

        zero -= 30;

        if(zero == -300){
            zero = 0;
            searchBox.css('transition', 'none');
        }
        else{
            searchBox.css('transition', 'all .8s ease');
        }
        // console.log(num);
        searchBox.css({'transform' : 'translateY(' + zero + 'px)',});
    }

    var listUp = setInterval(listNum, 3500);

    const megaHover = $('#nav>ul>li');
    const megaMenu = $('.megaGnb');


    megaHover.on('mouseenter', function(){
        $(this).addClass('on');
        if($(this).hasClass('on')){
            $(this).find(megaMenu).stop().slideDown(500);
        }
    });

    megaHover.on('mouseleave', function(){
        $(this).removeClass('on');
        if($(this).hasClass('on') == false){
            megaMenu.hide();
        }
    });

    megaHover.on('keyup', function(){
        $(this).addClass('on');
        $(this).find(megaMenu).stop().slideDown(500);
        $(this).siblings().find(megaMenu).hide();
    });


    const allSearchBtn = $('.all_search_list_btn');
    const allSearch = $('.all_search_list');

    allSearchBtn.on('click', function(){
      $(this).toggleClass('on');

      if($(this).hasClass('on')){
        allSearch.show();
      }
      else{
        allSearch.hide();
      }
    });

    const swiper1 = new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        touchRatio: 0,
        disableOnInteration: false,
        speed: 700,
        autoplay: {
          duration: 4000
        },
      
        pagination: {
          el: '.swiper-numbershow1',
          type: 'fraction',
        },
      
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },

      });

      $('.swiper-stopPlay1.play').on('click', function(){
        $(this).addClass('on');
        $('.swiper-stopPlay1.stop').removeClass('on');
        swiper1.autoplay.start();
      });

      $('.swiper-stopPlay1.stop').on('click', function(){
        $(this).addClass('on');
        $('.swiper-stopPlay1.play').removeClass('on');
        swiper1.autoplay.stop();
      });

        const colorList = ['#61769f', '#e85588', '#21a089', '#3b92cd'];
        const mainPagi = ['코로나19 (일반인, 보건의료인)', '코로나바이러스 감염증-19', '코로나19 예방접종','코로나19 예방접종 사전예약'];
        
        const pagiSwiper = new Swiper('.swiper1',{
            loop: true,
            allowTouchMove: false,
            touchRatio: 0,
                pagination: {
                    el: '.main-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<a href="#" class="' + className + '">' + (mainPagi[index]) + '</a>';
                    },
                },

            on: {
                slideChange: function(){
                // console.log(this.realIndex);
                    $('.main-pagination-deco').css({backgroundColor : colorList[this.realIndex]});
                }
            },
      });

      swiper1.controller.control = pagiSwiper;
      pagiSwiper.controller.control = swiper1;

      const infoTableft = $('.ibl_top>.il1>li');

      infoTableft.on('click', function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
      });

      const infoTabRight = $('.ibr1>li');

      infoTabRight.on('click', function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
      });

      const swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        touchRatio: 0,
        disableOnInteration: false,
        speed: 1500,
        autoplay: {
            duration: 3000
        },
      
        pagination: {
          el: '.swiper-numbershow2',
          type: 'fraction',
        },
      
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },

      });

      $('.sb1 .spP2').on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            swiper2.autoplay.stop();
            $('.sb1 .spP2 span:first-child').css('display', 'none');
            $('.sb1 .spP2 span:nth-child(2)').css('display', 'block');
        }
        else{
            swiper2.autoplay.start();
            $('.sb1 .spP2 span:first-child').css('display', 'block');
            $('.sb1 .spP2 span:nth-child(2)').css('display', 'none');
        }
      });

      const swiper3 = new Swiper('.swiper3', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        touchRatio: 0,
        disableOnInteration: false,
        speed: 1500,
        autoplay: {
            duration: 3000
        },
      
        pagination: {
          el: '.swiper-numbershow3',
          type: 'fraction',
        },
      
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },

      });

      $('.sb2 .spP2').on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            swiper3.autoplay.stop();
            $('.sb2 .spP2 span:first-child').css('display', 'none');
            $('.sb2 .spP2 span:nth-child(2)').css('display', 'block');
        }
        else{
            swiper3.autoplay.start();
            $('.sb2 .spP2 span:first-child').css('display', 'block');
            $('.sb2 .spP2 span:nth-child(2)').css('display', 'none');
        }
      });

      const swiper4 = new Swiper('.swiper4', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        touchRatio: 0,
        speed: 1500,
        autoplay: {
            duration: 3000
        },
      
        pagination: {
          el: '.swiper-numbershow4',
          type: 'fraction',
        },
      
        navigation: {
          nextEl: '.swiper-button-next4',
          prevEl: '.swiper-button-prev4',
        },

      });

      $('.sb3 .spP2').on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            swiper4.autoplay.stop();
            $('.sb3 .spP2 span:first-child').css('display', 'none');
            $('.sb3 .spP2 span:nth-child(2)').css('display', 'block');
        }
        else{
            swiper4.autoplay.start();
            $('.sb3 .spP2 span:first-child').css('display', 'block');
            $('.sb3 .spP2 span:nth-child(2)').css('display', 'none');
        }
      });

      const swiper5 = new Swiper('.swiper5', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        touchRatio: 0,
        speed: 800,

        navigation: {
            nextEl: '.swiper-button-next5',
            prevEl: '.swiper-button-prev5',
          },
      });

      const footerSlideBtn = $('.fbr1>li');
      const footerSlide = $('.fbr2');

      footerSlideBtn.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('on').siblings().removeClass('on');

        if($(this).hasClass('on')){
          $(this).find(footerSlide).stop().slideDown(300);
          $(this).siblings().find(footerSlide).stop().slideUp(300);
        }

        else{
          footerSlide.stop().slideUp(300);
        }

      });

      $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
          $('.to_top').addClass('on');
        }
        else{
          $('.to_top').removeClass('on');
        }
      });

      $('.to_top a').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 700);
      });
});