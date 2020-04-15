const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = `${message}`;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//
function emailValidator(email){
    const rege = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return rege.test(email.value);
}
//
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//
//     if(username.value === ''){
//         showError(username, 'Username is required')
//     }else{
//         showSuccess(username);
//     }
//     if(email.value === ''){
//         showError(email, 'Email is required')
//     }else if(!emailValidator(email)){
//         showError(email, 'Invalid Email')
//     }
//     else{
//         showSuccess(email);
//     }
//     if(password.value === ''){
//         showError(password, 'Password is required')
//     }else{
//         showSuccess(password);
//     }
//     if(password2.value === ''){
//         showError(password2, 'Password 2 is required')
//     }else{
//         showSuccess(password2);
//     }
// })

function checkRequired(inputArr){
    inputArr.forEach(function (input){
        if(input.value===''){
            const mes = input.id.charAt(0).toUpperCase() + input.id.slice(1)
            showError(input, `${mes} is required`)
        }else if(input === email){
            if(!emailValidator(email)){
                showError(email, 'Email is invalid')
            }
        }
        else {showSuccess(input)}

    })
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);

});


