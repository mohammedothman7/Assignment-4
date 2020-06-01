const insertText = (element, text) => {
  let el = document.getElementById(element);
  el.innerText = text;
};

const dontHover = (text) => {
  alert(text);
};

/* #4: In a Javascript file, write a program which checks the following things:
    a) checks that the password is 12345678
    b) if the password is incorrect, send an alert message
    c) Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.
*/

const element = document.querySelector('form');
element.addEventListener('submit', e => {
    e.preventDefault();
    
    let password = document.getElementById("password").value;

    if (password !== '12345678') {
        alert('Password is incorrect!');
    } else {
        document.getElementById("formh1").innerText = "Good Login Form";

    }
});