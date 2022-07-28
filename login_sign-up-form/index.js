const signinbtn = document.querySelector('.signinbtn');
const box = document.querySelector('.box signin');
const signupbtn = document.querySelector('.signupbtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');
const visibilityToggle = document.querySelectorAll('.input span')

signupbtn.onclick = function(){
  formBx.classList.add('active')
  body.classList.add('active')
  document.getElementById("boxsgin").style.opacity = "1";
  document.getElementById("boxsgup").style.opacity = "0";
}

signinbtn.onclick = function(){
  formBx.classList.remove('active')
  body.classList.remove('active')
  document.getElementById("boxsgin").style.opacity = "0";
  document.getElementById("boxsgup").style.opacity = "1";
}

visibilityToggle.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const password = e.target.parentNode.querySelector('.password')
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.getAttribute('type') === 'password' ? e.target.className = 'visible' : e.target.className = 'non-visible'
    password.setAttribute('type', type);
  })
})