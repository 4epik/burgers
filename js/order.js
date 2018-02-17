const sendButton = document.querySelector("#send");

function send(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("overlay__order-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("overlay__order-content");
  contentElement.innerHTML = ("сообщение отправлено");

  const close = document.createElement("a");
  close.classList.add("overlay__close");
  close.textContent = "закрыть";
  close.href = "#";
  close.addEventListener("click", function() {
    event.preventDefault();
    document.body.removeChild(overlayElement);
  });

  

  

  const image=document.createElement('img');
  
  image.src='images/x.png';

  overlayElement.appendChild(containerElement);
  
  containerElement.appendChild(contentElement);
contentElement.appendChild(close);

  return overlayElement;
}


sendButton.addEventListener("click", function() {
    event.preventDefault();
    const overlay = send('');
   
        document.body.appendChild(overlay);
});
