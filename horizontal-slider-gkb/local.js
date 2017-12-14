$('.slider--min').slick({
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.slider--max',
  centerMode: true,
  prevArrow: '<i class="slider_arrow slider_arrow--left"></i>',
  nextArrow: '<i class="slider_arrow slider_arrow--right"></i>',
  variableWidth: true,
  focusOnSelect: true,
  adaptiveHeight: true
});
$('.slider--max').slick({
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.slider--min',
  centerMode: true,
  prevArrow: '<i class="slider_arrow slider_arrow--left"></i>',
  nextArrow: '<i class="slider_arrow slider_arrow--right"></i>',
  variableWidth: true,
  focusOnSelect: true,
  adaptiveHeight: true
});

var overlay = document.getElementById('overlay');
var overlayClose = document.createElement('i');
overlayClose.className = 'overlay_close';
overlay.appendChild(overlayClose);

$(".overlay_close").on('click', function () {
  $("#overlay")
    .fadeOut();
});

$(".slider--min .slider_slide").on('click', function() {
  $("#overlay")
    .css("display", "flex")
    .hide()
    .fadeIn();
  $(".slider--max").slick('setPosition');
})

/*
$('.slider').on('click', 'div', function(e)
{
    e.stopPropagation();

    var currentIndex = $('.slider').slick('slickCurrentSlide');
    var slideIndex = $(this).data("slide-index");

    if(currentIndex == slideIndex)
    {
        return;
    }
    else if(currentIndex - 1 == slideIndex)
    {
        $('.slider').slickPrev();
    }
    else if(currentIndex + 1 == slideIndex)
    {
        $('.slider').slickNext();
    }
    else if(currentIndex == 0)
    {
        $('.slider').slickPrev();
    }
    else
    {
        $('.slider').slickNext();
    }
});
 */