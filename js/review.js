

//const review = document.getElementsByClassName(".review__content-link");//
const reviewOpen = document.getElementsByClassName("review__content-link");



function open(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlay__review-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("overlay__review-content");
 

  const titleElement = document.createElement("div");
 titleElement.classList.add("overlay__review-title");
  titleElement.innerHTML = ("Koнстантин Спилберг");

  const textElement = document.createElement("div");
  textElement.classList.add("overlay__review-text");
  textElement.innerHTML = ("Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным.");

  const closeElement = document.createElement("a");
  closeElement.classList.add("overlay__reviev-close");
  closeElement.textContent = " ";
  closeElement.href = "#";
  closeElement.addEventListener("click", function() {
   
    document.body.removeChild(overlayElement);
  });

  const image=document.createElement('img');
  
  image.src='images/x_2.png';

  

  

 

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(contentElement);
  contentElement.appendChild(titleElement);
  contentElement.appendChild(textElement);
contentElement.appendChild(closeElement);
closeElement.appendChild(image);

  return overlayElement;
}






for (i = 0; i < reviewOpen.length; i++) {
 reviewOpen.addEventListener('click', function(){
   const overlay = open('');
   document.body.appendChild(overlay);
   
 });
}


 
    