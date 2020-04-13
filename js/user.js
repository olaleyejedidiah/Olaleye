const ul = document.getElementById('users');
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(resp => resp.json())
.then(data => {
  let users = data;
  return users.map(user => {
    let li = document.createElement('li'),
        img = document.createElement('img'),
        span = document.createElement('span'),
        h4 = document.createElement('h4');
    img.src = 'https://imgplaceholder.com/100x100/cccccc/757575/glyphicon-user';
    h4.innerHTML = user.name;
    span.innerHTML = user.email;
    li.appendChild(img)
    li.appendChild(h4)
    li.appendChild(span)
    ul.appendChild(li)
  })
})
.catch(function(error) {
  console.log(error.message);
});   