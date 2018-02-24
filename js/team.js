var accordeonElement = document.getElementById("accordeon__list");
var itemsElement = accordeon.getElementsByClassName("accordeon__item");
var contentsElement = accordeon.getElementsByClassName("accordeon__content");
var triggersElement = accordeon.getElementsByClassName("accordeon__link");

var i;

accordeonElement.addEventListener("click", function(e) {
    e.preventDefault();
if (e.target.classList.contains("accordeon__link")) {
var triggerElement = e.target;
var contentElement = triggerElement.nextElementSibling;
var itemElement = triggerElement.parentNode;


if (!itemElement.classList.contains("active")) { 

  for (i = 0; i < itemsElement.length; i++) {
    itemsElement[i].classList.remove("active");
  }
  

  itemElement.classList.add("active");

  for (i = 0; i < triggersElement.length; i++) {
    triggersElement[i].classList.remove("active");
  }
  triggerElement.classList.add("active");
 
  for (i = 0; i < contentsElement.length; i++) {
    contentsElement[i].style.height = null;
  }
  
  contentElement.style.height = contentElement.scrollHeight + "px"; 

  
  
}

else { 
  itemElement.classList.remove("active");
  triggerElement.classList.remove("active");
 
 contentElement.style.height = null;
}
}
});
