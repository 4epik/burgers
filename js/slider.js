var leftArrow = document.querySelector('.prev');
var rightArrow = document.querySelector('.next');
var sliderList = document.querySelector('.burger__list');
var sliderContainer = document.querySelector('.burger__slider');
var size = parseInt(getComputedStyle(sliderContainer).width);
var start = 1;

leftArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));
 
    if (start > 1 && currentLeft % size == 0) {        
      sliderList.style.left = currentLeft + size + 'px';
      start--;      
      
    } else if (currentLeft % size == 0) {
      sliderList.style.left = currentLeft - 4 * size + 'px';
      start = 5;      
    }
 })

rightArrow.addEventListener('click', function (e) {
    e.preventDefault();
    var currentLeft = (parseInt(getComputedStyle(sliderList).left));

    if (start < 5 && currentLeft % size == 0) {

        sliderList.style.left = currentLeft - size + 'px';
        start++;
    
    } else if (currentLeft % size == 0) {
      sliderList.style.left = 0 + 'px';
      start = 1;     
    }
})


window.addEventListener('resize', function() {  
  size = parseInt(getComputedStyle(sliderContainer).width); 
  // console.log("size: " + size);
  // console.log("start: " + start);
  // console.log(-size * start);
  sliderList.style.left = -size * (start-1) + 'px';
});