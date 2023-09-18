const form = document.getElementById('form');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const refreshButton = document.querySelector('.refresh-button');

form.addEventListener('submit', e => {
  e.preventDefault();

  let emailValue= email.value.trim()
  let emailVerify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(emailValue === ''){
    errorFunction('Valid email required');
  } else if (!emailValue.match(emailVerify)){
    errorFunction('Not a valid email');
  } else {
    successFunction();
  }
});

function errorFunction(message){
  const emailBox = document.getElementById('email');
  const span = document.getElementById('error-text');
  emailBox.classList.add('error');
  emailBox.classList.remove('success');
  span.innerText = message;
  span.className += 'error-text ';
  span.style.display = 'inline-block'; 
}

function successFunction(){
  const emailBox = document.getElementById('email');
  const span = document.getElementById('error-text');
  const everything = document.querySelector('.everything');
  const everything2 = document.querySelector('.everything2');
  emailBox.classList.remove('error');
  emailBox.classList.add('success');
  span.style.display = 'none'
  everything.classList.add('hidden');
  everything2.classList.remove('hidden');
}

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage);
