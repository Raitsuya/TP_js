
const GetUsers = () => {
    fetch('http://localhost:3000/users').then(result => result.json()).then(result => {
    const container = document.getElementById("user-container");
    container.innerHTML= '';    
const list = document.createElement('ul');
    container.appendChild(list);
result.forEach(usersData => {
const user = document.createElement('li');
user.innerHTML= `${usersData.firstname}, ${usersData.lastname}, ${usersData.email}, ${usersData.phone}, ${usersData.password}`;
    list.appendChild(user)
        })
    });

}
GetUsers();



const addUser = (user) => {
    console.log(user)
    fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        "Content-type": "application/json",
    }
}).then(result => result.json()).then(result => console.log(result))

GetUsers();    
}


const Data = () => {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    if (!firstname) {
        const firstnameError = document.getElementById("error_firstname")
        firstnameError.innerHTML ="le prenom est requis";
        firstnameError.style.color = "red";
    }
    const user = {
        firstname,
        lastname,
        email,
        phone,
        password,
    }
    addUser(user)
    
}

const button = document.getElementsByClassName('button')
ChangeColor = () => {
    button.classList.add('change_color')
}

