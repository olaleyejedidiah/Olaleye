
const submit = document.getElementById('submitbtn');

submit.addEventListener('click', e => {
    e.preventDefault()

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const user = {
        "email": email,
        "password": password
    }
    console.log(user);
})




