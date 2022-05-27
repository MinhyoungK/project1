$(function(){
// header background image slide
    var imgN=0;
    $("#header .slider li").eq(imgN).addClass("active");
    setInterval(() => {
        if(imgN< 4) imgN++;
        else imgN=0;

        $("#header .slider li").removeClass("active");
        $("#header .slider li").eq(imgN).addClass("active");
    }, 4000);


// main txt animation
    setTimeout(function(){
        $("#header .main_txt .slogan").addClass("active")
    }, 100);

    setTimeout(function(){
        $("#header").addClass("active")
    }, 500);

// gnb fixed
    var scrollT= $("#header .top").offset();

    $(window).scroll(function(){
        if($(document).scrollTop()>scrollT.top){
            $("#header .top").addClass("fixed");
        } else {
            $("#header .top").removeClass("fixed");
        }
    });

// gnb hover & focus event
    $("#header .top").hover(
        function(){
            $("#header .top").addClass("over");
        },
        function(){
            $("#header .top").removeClass("over");
        }
    )
    $("#header .top").focusin(function(){
        $(this).addClass("over");
    });
    $("#header .top").focusout(function(){
        $(this).removeClass("over");
    });

//  gnb list hover & focus
    $("#gnb > ul > li").hover(
        function(){
            $(this).addClass("over");
        },
        function(){
            $(this).removeClass("over");
        }
    )
    $("#gnb > ul > li").focusin(function(){
        $(this).addClass("over");
    });
    $("#gnb > ul > li").focusout(function(){
        $(this).removeClass("over");
    });

// 2 depth hover & focus
    $("#gnb li ul a").hover(
        function(){
            $(this).addClass("over");
        },
        function(){
            $(this).removeClass("over");
        },
    )
    $("#gnb li ul a").focusin(function(){
        $(this).addClass("over");
    });
    $("#gnb li ul a").focusout(function(){
        $(this).removeClass("over");
    });
// gnb end

// $("#header .main_txt .reservation").click(function(e){
//     e.preventDefault();
//     $("#header .main_txt .yet").stop().slideToggle(300);
//     $(this).toggleClass("clicked");
//     $(this).next().toggleClass("clicked");
// });
var txt;
var indexN=0;
$("#header .main_txt .room_search .list dt a").click(function(e){
	e.preventDefault();
	$(this).toggleClass("open");
	$(this).parent().next().slideToggle(300);
})
$("#header .main_txt .room_search .list dd a").click(function(e){
	e.preventDefault();
	txt=$(this).text();
    indexN=$(this).parent().index();
	$(this).parent().parent().parent().slideUp(300);
	$("#header .main_txt .room_search .list dt a").html(txt +"<span></span>");
	$("#header .main_txt .room_search .list dt a").removeClass("open");
    $("#header .main_txt .room_search .list option").eq(indexN).prop("selected", true);
})
$("#header .main_txt .room_search .hotel dt a").click(function(e){
	e.preventDefault();
	$(this).toggleClass("open");
	$(this).parent().next().slideToggle(300);
})
$("#header .main_txt .room_search .hotel dd a").click(function(e){
	e.preventDefault();
	txt=$(this).text();
    indexN=$(this).parent().index();
	$(this).parent().parent().parent().slideUp(300);
	$("#header .main_txt .room_search .hotel dt a").html("Number One "+ txt +"<span></span>");
    $("#header .main_txt .room_search .hotel option").eq(indexN).prop("selected", true);
	$("#header .main_txt .room_search .hotel dt a").removeClass("open");
})
$("#header .main_txt .room_search .count dt a").click(function(e){
	e.preventDefault();
	$(this).toggleClass("open");
	$(this).parent().next().slideToggle(300);
})
$("#header .main_txt .room_search .count dd a").click(function(e){
	e.preventDefault();
	txt=$(this).text();
    indexN=$(this).parent().index();
	$(this).parent().parent().parent().slideUp(300);
	$(this).parent().parent().parent().prev().find("a").html(txt);
    $(this).parent().parent().parent().parent().next().find("option").eq(indexN).prop("selected", true);
	$("#header .main_txt .room_search .count dt a").removeClass("open");
})
// page2 슬라이더 이동 버튼 & list 활성화
    var bannerN=0;
    var xoffset=2600;
    var xtarget=0;
    var total=12;
    var listN=0;
    $("#page2 .room_list li").eq(listN).addClass("active");

    $("#page2 .room_list li").click(function(e){
        e.preventDefault();
        var n=$(this).index();

        if(n != listN){
            listN=n;
            bannerN=listN*3;
        }
        else{
            return;
        }
        // console.log(n, listN);

        $("#page2 .room_list li").removeClass("active");
        $(this).addClass("active");
        xtarget=xoffset*bannerN*(-1);
        $("#page2 .slider_moving ul").css({left:xtarget});
    });
    $("#page2 .controls .prev").click(function(e){
        e.preventDefault();
        if(bannerN > 0){
            bannerN=bannerN-1;
            listN=parseInt(bannerN / 3);
        }
        else{
            return;
        }
        // console.log("prev", bannerN, listN);

        xtarget=xoffset*bannerN*(-1);
        $("#page2 .room_list li").removeClass("active");
        $("#page2 .room_list li").eq(listN).addClass("active");
        $("#page2 .slider_moving ul").css({left:xtarget});
    });
    $("#page2 .controls .next").click(function(e){
        e.preventDefault();

        if(bannerN < (total-1)){
            bannerN=bannerN+1;
            listN=parseInt(bannerN / 3);
        }
        else{
            return;
        }
        // console.log("next", bannerN, listN);

        xtarget=xoffset*bannerN*(-1);
        $("#page2 .room_list li").removeClass("active");
        $("#page2 .room_list li").eq(listN).addClass("active");
        $("#page2 .slider_moving ul").css({left:xtarget});
    });

// page3 슬라이드
    var listNum=0;
    // $("#page3 .banner_list li").eq(listNum).addClass("active");
    $("#page3 .controls .next").click(function(e){
        e.preventDefault();
        if(listNum < 2){
            listNum = listNum + 1;
        } else if(listNum == 2){
            listNum = 0;
        }
        showBanner();
        // $("#page3 .banner_list li").removeClass("active");
        // $("#page3 .banner_list li").eq(listNum).addClass("active");

    });
    $("#page3 .controls .prev").click(function(e){
        e.preventDefault();
        if(listNum > 0){
            listNum = listNum - 1;
        }else if(listNum == 0){
            listNum = 2;
        }

        showBanner();
        // $("#page3 .banner_list li").removeClass("active");
        // $("#page3 .banner_list li").eq(listNum).addClass("active");
    });

	function showBanner(){
		$("#page3 .banner_list li").each(function(i){
			if(i == listNum){
				var obj=$(this);
				obj.show();

				setTimeout(function(){
					obj.addClass("active");
				}, 100);
			}
			else{
				$(this).removeAttr("style").removeClass("active");
			}
		});
	}
    showBanner();



    // page4 슬라이더 이동 버튼

    var bannerNum=0;
    var p4_xoffset=2600;
    var p4_xtarget=0;
    var p4_total=3;
    // var labelNum = 1;
    $("#page4 .controls .prev").click(function(e){
    e.preventDefault();
    if(bannerNum > 0){
        bannerNum=bannerNum-1;
        // labelNum = "0"+ (bannerNum+1);
    }
    else{
        return;
    }

    p4_xtarget=p4_xoffset*bannerNum*(-1);
    $("#page4 .slider_moving ul").css({left:p4_xtarget});
    // $("#page4 .banner_label span strong").text(labelNum + ".");
    $("#page4 .food_info li").removeClass("current");
    $("#page4 .food_info li").eq(bannerNum).addClass("current");
    $("#page4 .banner_label li").removeClass("on");
    $("#page4 .banner_label li").eq(bannerNum).addClass("on");
    });

    $("#page4 .controls .next").click(function(e){
    e.preventDefault();
    if(bannerNum < (p4_total-1)){
        bannerNum=bannerNum+1;
        // labelNum = "0"+ (bannerNum+1);
    }
    else{
        return;
    }

    p4_xtarget=p4_xoffset*bannerNum*(-1);
    $("#page4 .slider_moving ul").css({left:p4_xtarget});
    // $("#page4 .banner_label span strong").text(labelNum+ ".");
    $("#page4 .food_info li").removeClass("current");
    $("#page4 .food_info li").eq(bannerNum).addClass("current");
    $("#page4 .banner_label li").removeClass("on");
    $("#page4 .banner_label li").eq(bannerNum).addClass("on");
    });


    // page5
    $("#page5 .slider_bar li").click(function(e){
        e.preventDefault();

        var distance = $(this).index()*390*(-1);
        
        $("#page5 .moving").css({"left":distance});
        $("#page5 .slider_bar li").removeClass("current");
        $(this).addClass("current");
    });


// top button
    $(".toTop a").click(function(e){
        e.preventDefault();
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    });

   
});

