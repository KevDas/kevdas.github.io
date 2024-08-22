const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var index = 1;
$("nav.indicators ul li").bind("click",indicator);
setCurrentPoject();

function indicator(){
		$("nav.indicators ul li").unbind("click");

		index = $(this).index();

		setCurrentPoject();
	}

function setCurrentPoject() {

			if(index > $("nav.indicators ul li").length-1){
					index = 1;
			}
			if(index < 1){
					index = $("nav.indicators ul li").length-1;
			}

			var currentItem = $("nav.indicators ul li")[index];

			if(!$(currentItem).hasClass("current")){

				var parentleft = ($(currentItem).parent().offset().left)+10;

				var position = $(currentItem).offset().left - parentleft;

				var diff = position - ($("nav.indicators ul li.current").offset().left - parentleft);

				var direction = "left";

				if(diff < 0){
					direction = "left";
				}else{
					direction = "right";
				}

				slideshow(direction,position,diff);

			}
	}


$(".indicators ul li").on("click", function() {


  if ($(this).hasClass("current")) {
    return false;
  } else {
    var parentleft = ($(this).parent().offset().left) + 10;

    var position = $(this).offset().left - parentleft;

    var diff = position - ($("nav.indicators ul li.current").offset().left - parentleft);

    var direction = "left";

    if (diff < 0) {
      direction = "left";
    } else {
      direction = "right";
    }

    slideshow(direction, position, diff);

  }
});

function slideshow(direction,position,diff) {

		if(direction == "left"){
			$("nav.indicators ul li.current").css({"left":position+"px","width":(Math.abs(diff)+20)+"px"});
			setTimeout(function () {
				$("nav.indicators ul li.current").css({"width":"20px"});
				bindNavigation();
			},500);
		}else{
			$("nav.indicators ul li.current").css({"width":(Math.abs(diff)+20)+"px"});
			setTimeout(function () {
				$("nav.indicators ul li.current").css({"left":position+"px","width":"20px"});
				bindNavigation();
			},400);
		}

	}

function bindNavigation() {
		$("nav.indicators ul li").bind("click",indicator);
  
  
	}