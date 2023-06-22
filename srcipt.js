var settingsmenu = document.querySelector(".settings-menu")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-drop")
}


const loginLink = document.querySelector('.loginlink')
const registerLink = document.querySelector('.registerlink')
const loginBox = document.querySelector(".form-box.login")
const registerBox = document.querySelector(".form-box.register")

registerLink.addEventListener('click', ()=> {
    loginBox.classList.add('active')
    registerBox.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    loginBox.classList.remove('active')
    registerBox.classList.remove('active')
})

function toLogin(){
    loginBox.classList.remove('active')
    registerBox.classList.remove('active')
}
function toRegister(){
    loginBox.classList.add('active')
    registerBox.classList.add('active')
}

