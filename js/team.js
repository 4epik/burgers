var accordeon = document.getElementById("accordeon__list");
var items = accordeon.getElementsByClassName("accordeon__item");
var contents = accordeon.getElementsByClassName("accordeon__content");
var triggers = accordeon.getElementsByClassName("accordeon__link");

var i;

accordeon.addEventListener("click", function(e) {
    //event.preventDefault();//
if (e.target.classList.contains("accordeon__link")) {
var trigger = e.target;
var content = trigger.nextElementSibling;
var item = trigger.parentNode;


if (!item.classList.contains("active")) { 

  for (i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
  

  item.classList.add("active");

  for (i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove("active");
  }
  trigger.classList.add("active");
 
  for (i = 0; i < contents.length; i++) {
    contents[i].style.height = null;
  }
  
  content.style.height = content.scrollHeight + "px"; 

  
  
}

else { 
  item.classList.remove("active");
  trigger.classList.remove("active");
 
 content.style.height = null;
}
}
});
