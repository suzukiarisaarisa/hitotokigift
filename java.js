$(function(){
$('a[href^="#"]').click(function(){
	var speed = 1000;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top-120;
	$("html, body").animate({scrollTop:position}, speed, "swing");
  });
});
$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});

$(function () {
  var urlHash = location.hash;
  if (urlHash) {
    $('index,html').stop().scrollTop(0);
    setTimeout(function(){
	var speed = 1000;
      var headerHight = 60;
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $('index,html').stop().animate({scrollTop:position}, speed, "swing");
  }, 100);
}
});

$(document).ready(function(){
    var fixedElm = $('header'); // fixedする要素
    var cancellationElm = $('footer'); // これの位置に来たらfixedが解除される要素
 
    var fixedHeight = fixedElm.height(); // fixedする要素の高さを取得
    var cancellationVal = cancellationElm.offset().top - $(window).height() + fixedHeight; // fixed解除するための基準となる値を取得
    $(window).on('scroll',function(){
        if ($(window).scrollTop() < cancellationVal) {
            fixedElm.css('position', 'fixed');
        } else {
            fixedElm.css('position', 'relative');
        }
    });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".sizenimg,.sakeimg,.otoimg,.asobiimg,.tomoriimg").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+200) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".sizengura,.asobigura,.sakegura,.tomorigura,.otogura").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+200) {
      $(this).addClass("fadein2");
    } else {
      $(this).removeClass("fadein2");
    }
  });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".newsgura").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+200) {
      $(this).addClass("fadein3");
    } else {
      $(this).removeClass("fadein3");
    }
  });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $("tr").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+200) {
      $(this).addClass("fadein4");
    } else {
      $(this).removeClass("fadein4");
    }
  });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".abouttx").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+400) {
      $(this).addClass("fadein5");
    } else {
      $(this).removeClass("fadein5");
    }
  });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  $(".h1").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+300) {
      $(this).addClass("fadein6");
    } else {
      $(this).removeClass("fadein6");
    }
  });
});
