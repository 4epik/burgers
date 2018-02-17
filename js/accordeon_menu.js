
var accordeon = document.getElementById("menu__accordeon");
var items = accordeon.getElementsByClassName("menu__accordeon-item");
var contents = accordeon.getElementsByClassName("menu__accordeon-text");
var triggers = accordeon.getElementsByClassName("title__text");
var i;

accordeon.addEventListener("click", function(e) {
    event.preventDefault();
if (e.target.classList.contains("title__text")) {
var trigger = e.target;
var content = trigger.nextElementSibling;
var item = trigger.parentNode;


if (!item.classList.contains("active")) { 

  for (i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
  
  item.classList.add("active");

  for (i = 0; i < triggers.length; i++) {
    triggers[i].style.color = "#ffffff";
  }
  trigger.style.color = "#f9b43b";
  
  for (i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");

   // contents[i].style.width = null;//
   // contents[i].style.paddingTop = null;//
    //contents[i].style.paddingRight = null;//
    //contents[i].style.paddingLeft = null;//

  }

  content.classList.add("active");
  //content.style.width = 540 + "px";//
 // content.style.paddingTop = 61 + "px";//
 // content.style.paddingRight = 35 + "px";//
 // content.style.paddingLeft = 35 + "px";//
  

} 

else { 
  item.classList.remove("active");
 content.classList.remove("active");
 trigger.style.color = "#ffffff";
 
 // content.style.width = null;//
 //content.style.paddingTop = null;//
//  content.style.paddingRight = null;//
 // content.style.paddingLeft = null;//
}
}
});

