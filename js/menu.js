const openButton = document.querySelector("#openOverlay");



function openOverlay(content) {
  const overlayElement = document.querySelector(".overlay");
  overlayElement.style.height = '100%';
  

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlay__container");

  const logo = document.querySelector('#header__logo');

  const menu = document.querySelector('#overlay__menu');
  menu.style.display = 'block';

    
  
 const listItem = document.querySelector('#overlay__menu-item');
 listItem.style.display = 'block';

  

  const contentElement = document.createElement("div");
  contentElement.classList.add("overlay__content");
  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = " ";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
    document.body.removeChild(overlayElement);
  });

  const image=document.createElement('img');
  
  image.src='../images/x.png';
  
 
  

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  closeElement.appendChild(image);
  containerElement.appendChild(logo);
  containerElement.appendChild(menu);
  menu.appendChild(listItem);
  

  return overlayElement;
}

openButton.addEventListener("click", function() {
  const overlay = openOverlay('');
  document.body.appendChild(overlay);
});
