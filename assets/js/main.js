/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('click_signup'),
    signIn = document.getElementById('click_signin'),
    login = document.getElementById('login'),
    create = document.getElementById('create');


signUp.addEventListener('click', () => {

    create.classList.add('invisible')
    login.classList.remove('invisible')

})

signIn.addEventListener('click', () => {
    create.classList.remove('invisible')
    login.classList.add('invisible')
})
