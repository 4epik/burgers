const openButton = document.querySelector("#openOverlay");





function openOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.style.height = '100%';
 overlayElement.classList.add("overlay");
  

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlay__container");

  const logo = document.createElement('div');
  logo.classList.add("header__logo-overlay");

  const logoLink = document.createElement("a");
  logoLink.classList.add("header__logo-link");
  logoLink.href = "#";
  

  const imageLogo=document.createElement('img');
  
  imageLogo.src='../images/burger_logo.png';

  const contentElement = document.createElement("div");
  contentElement.classList.add("overlay__content");
  

  
    
      var list = document.createElement("ul");
      list.classList.add("overlay__menu");
      
       var arrMenu = ["о нас", "бургеры", "команда", "меню", "отзывы", "контакты"] ;
       var arrNumber= [1, 2, 3, 4, 5, 7];
     
     for(var i = 0; i < arrMenu.length; i++){
       for(var i = 0; i < arrNumber.length; i++){

        const liElement = document.createElement("li");
        liElement.classList.add("overlay__menu-item");

        const linkElement = document.createElement("a");
        linkElement.classList.add("menu__item-link");
        linkElement.textContent = arrMenu[i];
        linkElement.href = "#";
        linkElement.setAttribute("data-scroll-to", arrNumber[i]);
        linkElement.addEventListener("click", function() {


       

          $('[data-scroll-to]').on('click', e => {
            e.preventDefault();
          
            const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
          
          
            performTransition(target);
            document.body.removeChild(overlayElement);
          
          })

        });
       
      
        //list.innerHTML += ('<li class="overlay__menu-item"><a href="#" class="menu__item-link" data-scroll-to="' + arrNumber[i] + '">' + arrMenu[i] + '</a></li>');
        
        list.appendChild(liElement);
        liElement.appendChild(linkElement);


        
       }
       } 
       
     
   
 



  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = " ";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  const image=document.createElement('img');
  
  image.src='images/x.png';
  
 
  

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(logo);
  logo.appendChild(logoLink);
  logoLink.appendChild(imageLogo);
  containerElement.appendChild(closeElement);
  closeElement.appendChild(image);
  containerElement.appendChild(logo);
  containerElement.appendChild(contentElement);
 contentElement.appendChild(list);
  

  return overlayElement;
}

openButton.addEventListener("click", function() {
  const overlay = openOverlay('');
  document.body.appendChild(overlay);
});
