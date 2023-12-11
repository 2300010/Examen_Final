const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const date = document.querySelector('#dateDeNaissance');
const email = document.querySelector('#mail');
const site = document.querySelector('#site');
const code = document.querySelector('#code');
const genre = document.querySelector('#genre');
const pays = document.querySelector('#pays');

form.addEventListener('envoyer', function (e) 
{
    // prevent the form from submitting
    e.preventDefault();
})

const isRequired = value => value === '' ? false : true;

const isEmailValid = (email) => 
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (code) => 
{
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(code);
}

const showError = (input, message) => 
{
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const formField = input.parentElement;

formField.classList.remove('success');
formField.classList.add('error');

const error = formField.querySelector('small');

error.textContent = message;

const showSuccess = (input) => 
{
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}