/**
 * @author minks
 */

$(function() {
    var win_width = $(window).width() + 17;
    
    //상위 메뉴 밑의 하위 메뉴 보이기&숨기기
	$('nav.nav .nav_list>li.menu').on("mouseover", function(evt) {
		evt.preventDefault();
        $('aside.aside').stop(true,true).slideDown(200);
	});
	
	$('nav.nav').on("mouseleave", function(evt) {
		evt.preventDefault();
        $('aside.aside').stop(true,true).slideUp(200);
	});
    
    $('.mb_area .mb_box .top_menu_list li .top_menu_tit').click(function() {
		if ($(this).next('ul').css("display") == "block") {
			$(this).parent().children('.top_sub_menu_list').slideUp();
            $(this).removeClass('rotate');
			return false;
		} else {
            if ($(this).parent().parent('.top_sub_menu_list').length > 0) {
                $('.top_sub_menu_list').not($(this).parents('.top_sub_menu_list')).slideUp();
                $('.mb_area .mb_box .top_menu_list li .top_menu_tit').not($(this).parents('.top_sub_menu_list').prev('.top_menu_tit')).removeClass('rotate');
            } else {
                $('.top_sub_menu_list').slideUp();
                $('.mb_area .mb_box .top_menu_list li .top_menu_tit').removeClass('rotate');
            }
            
            $(this).parent().children('.top_sub_menu_list').slideDown();
            $(this).addClass('rotate');
			return false;
		}
	});
	
	//모바일 슬라이드 메뉴 보이기&숨기기
	$('.mb_area .mb_btn').click(function() {
		if ($('.mb_area .mb_menu').css("display") == "none") {
			$('.mb_area .mb_menu').css('display','block');
			$('.mb_area .mb_menu').css('z-index','999');
			$('.mb_area .mb_box').css('left','0px');
			$('.mb_area .line1').addClass('line11');
			$('.mb_area .line2').addClass('line22');
			$('.mb_area .line3').addClass('line33');
			//$('body').css('overflow','hidden');
		} else {
			$('.mb_area .mb_menu').css('display','none');
			$('.mb_area .mb_menu').css('z-index','-1');
			$('.mb_area .mb_box').css('left','-300px');
			$('.mb_area .line1').removeClass('line11');
			$('.mb_area .line2').removeClass('line22');
			$('.mb_area .line3').removeClass('line33');
			//$('body').css('overflow','scroll');
		}
	});
    
    //swiper 이미지 슬라이드 (메인)
	var swiper = new Swiper('.main_top_slide_list', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            prevEl: '.main_top_slide_btn_prev',
            nextEl: '.main_top_slide_btn_next',
            clickable: true,
        },
        watchOverflow: true
    });
    
    if (win_width > 1080) {
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(2).addClass("main_slide_center");
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(1).addClass("main_slide_prev");
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(3).addClass("main_slide_next");
    } else if (win_width > 550) {
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(1).addClass("main_slide_center");
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(0).addClass("main_slide_prev");
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(2).addClass("main_slide_next");
    } else {
        $(".main_area2 .main_product_slide_list .swiper-slide").eq(0).addClass("main_slide_center");
    }
    
    var swiper2 = new Swiper('.main_product_slide_list', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            prevEl: '.main_product_slide_btn_prev',
            nextEl: '.main_product_slide_btn_next',
            clickable: true,
        },
        pagination: {
            el: '.main_slide_pagination',
            clickable: true,
        },
        watchOverflow: true,
        breakpoints: {
            1081: {
                slidesPerView: 5
            },
            551: {
                slidesPerView: 3
            }
        },
        on: {
            slideChange: function() {
                winWidth = $(window).width() + 17;
                centerIndex = 0;
                
                if (winWidth > 1080) {
                    centerIndex = this.activeIndex + 2;
                } else if (winWidth > 550) {
                    centerIndex = this.activeIndex + 1;
                } else {
                    centerIndex = this.activeIndex;
                }
                
                $(".main_area2 .main_product_slide_list .swiper-slide").removeClass("main_slide_center");
                $(".main_area2 .main_product_slide_list .swiper-slide").removeClass("main_slide_prev");
                $(".main_area2 .main_product_slide_list .swiper-slide").removeClass("main_slide_next");
                $(".main_area2 .main_product_slide_list .swiper-slide").eq(centerIndex).addClass("main_slide_center");
                $(".main_area2 .main_product_slide_list .swiper-slide").eq(centerIndex - 1).addClass("main_slide_prev");
                $(".main_area2 .main_product_slide_list .swiper-slide").eq(centerIndex + 1).addClass("main_slide_next");
            }
        }
    });
    
    var swiper3 = new Swiper('.main_new_area', {
        observer: true,
        observeParents: true,
        slidesPerView : 1,
        spaceBetween: 0,
        pagination: {
            el: '.main_new_slide_pagination',
            clickable: true,
        },
        watchOverflow: true,
        breakpoints: {
            550: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        },
    });
});

