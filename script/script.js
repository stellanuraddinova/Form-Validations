const form = document.querySelector('#form')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const rpassword = document.querySelector('#rpassword')

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success');
}
const setSuccess = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const validateInputs = () =>{
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const rpasswordValue = rpassword.value.trim();

    if (nameValue === ''){
        setError(name, 'Name is required');
    }else{
        setSuccess(name)
    }

    if (surnameValue === ''){
        setError(surname, 'Surname is required');
    }else{
        setSuccess(surname)
    }
    if (phoneValue === ''){
        setError(phone, 'Phone is required');
    }else{
        setSuccess(phone)
    }

    if (emailValue === ''){
        setError(email, 'Email is required')
    }else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address')
    }else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'Password is required')
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character')
    }else{
        setSuccess(password);
    }

    if(rpasswordValue === ''){
        setError(rpassword, 'Please confirm your password')
    }else if(rpasswordValue !== passwordValue){
        setError(rpassword, "Passwords doesn't match");
    }else{
        setSuccess(rpassword);
    }
}