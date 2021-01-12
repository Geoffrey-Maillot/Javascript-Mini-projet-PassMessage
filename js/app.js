const formElem = document.getElementById(`message-form`)

formElem.addEventListener(`submit`, (e) => {
  e.preventDefault();
  
  const message = document.getElementById(`message`).value;
  const lastMessage = document.querySelector(`.message-content`);
  const alertMessage = document.querySelector(`.alert`);
  
  if(!message) {
    alertMessage.classList.toggle(`show`);
    setTimeout(()=> {
      alertMessage.classList.toggle(`show`)
    }, 2000)
  } else {
    lastMessage.innerHTML = ``
    lastMessage.innerHTML = message
  }
})