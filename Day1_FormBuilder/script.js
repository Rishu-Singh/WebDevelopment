const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show input success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    // console.log(input.value);
    if (input.value.trim() === '') {
      // trim = trims whitespaces
      // showError(input,`${input.id} is required`);
      showError(input, `${getFieldName(input)} is required`); // to make the first alphabet capital
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'passwords do not match');
  }
}

// Event Listner
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log('username');
  // console.log('user:',username.value);
  // console.log(username.value);
  /* if(username.value === ''){            //its not a correct way using so if else statements if there are many fields.
        showError(username,'Username is required');
    }
    else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid')
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'Password is required');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Password 2 is required');
    }
    else{
        showSuccess(password2);
    } */

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
