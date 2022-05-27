$(function(){
	var swiper = new Swiper("#main_slider .swiper", {
		effect: "fade",
		navigation: {
			nextEl: "#main_slider .swiper-button-next",
			prevEl: "#main_slider .swiper-button-prev",
		},
		pagination: {
          el: "#main_slider .swiper-pagination",
        },
		loop:true,
		autoplay:{
			delay:3000,
		},
	});

	var height;
	$(window).scroll(function(){
		height=$(window).scrollTop();
		if(height>60){
			$("#header").addClass("fixed");
		}else{
			$("#header").removeClass("fixed");
		}
	});


	var w;
	$(".tab").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#gnb").toggleClass("active");
		$("body").toggleClass("fixed"); 
		
		if($('#gnb ul ul').hasClass("active")==true){
			$("#gnb ul ul").removeClass("active");
		}
		if($(".book").hasClass("active")==true){
			$(".book").removeClass("active");
			$(".main_text").removeClass("active");
		}
	});
	$(window).resize(function(){
		w=window.innerWidth;
		if(w > 600 && $("#gnb").hasClass("active")){
			$("#gnb").removeClass("active");
			$("#header .tab").removeClass("active");
		}
	});
	$("#gnb>ul>li").click(function(e){
		e.preventDefault();
		$("#gnb>ul>li").find("ul").removeClass("active");
		$(this).find("ul").toggleClass("active");
	});

	$(".main_text .book_btn").click(function(e){
		e.preventDefault();
		$(this).parent().addClass("active");
		$(".book").addClass("active");
	});


	$("#page1 li").click(function(e){
		e.preventDefault();
		$("#page1 li").removeClass("active");
		$(this).addClass("active");
	});

	var room_swiper = new Swiper(".roomSwiper", {
		pagination: {
			el: ".roomSwiper .swiper-pagination",
			clickable: true,
		  },
		  navigation: {
			nextEl: "#room_slider .swiper-button-next",
			prevEl: "#room_slider .swiper-button-prev",
		},
		on:{
			slideChange:function(){
				// console.log(this.activeIndex);

				roomN=this.activeIndex;

				if(roomN <= 2){
					listN=0;
				}
				else if(roomN <= 5){
					listN=1;
				}
				else if(roomN <= 8){
					listN=2;
				}
				else if(roomN <= 11){
					listN=3;
				}

				for(var i=0; i<5; i++){
					if(i == listN){
						$("#page2 .room_list li").eq(i).addClass("active");
						$("#page2 .desc dl").eq(i).addClass("active");
					}
					else{
						$("#page2 .room_list li").eq(i).removeClass("active");
						$("#page2 .desc dl").eq(i).removeClass("active");
					}
				}
			}
		}
	});

	var listN=0;
	var roomN=0;
	$("#page2 .room_list li").eq(listN).addClass("active");

	$("#page2 .room_list li").click(function(e){
		e.preventDefault();
		listN=$(this).index();

		$("#page2 .room_list li").each(function(i){
			if(listN == i){
				$(this).addClass("active");
				roomN=listN*3;
				room_swiper.slideTo(roomN,1000,false);
			}
			else{
				$(this).removeClass("active");
			}
		});
	});




	var swiper = new Swiper(".attractionSwiper", {
		effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		loop:true,
      });

	  $("#page3 .attractionSwiper .swiper-slide div").click(function(){
		$(this).find("p").toggleClass("active");
	  });


	  var swiper = new Swiper("#page5 .reviewSwiper", {
		pagination: {
			el: ".reviewSwiper .swiper-pagination",
			clickable: true,
		},
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		loop:true,
      });
});