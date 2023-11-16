/*fetch('http://localhost:3000/users').then(result => {
    return result.json()
}).then(data => {
    console.log(data)
    data.forEach(((firstname,lastname)) => {
        console.log(data)
    }); 
    const {firstname, lastname, email} = data[0]
    console.log(firstname)
    console.log(lastname)
});
*/


const newUser = {
    firstname:"test",
    lastname:"test",
    email:"test",
    phone:"test",
    password:"test"
}

const addUser = (user) => {

    fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        "Content-type": "application/json",
    }
}).then(result => result.json()).then(result => console.log(result))

    
}

addUser(newUser)


console.log(JSON.stringify(newUser));


const Get_User = (id)  => {
    fetch(`http://localhost:3000/users/${id}`, {
        method:'GET',
    }).then(result => result.json()).then(result => console.log(result))
}


const Delete_User = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
    method:'DELETE',
    }).then(result => result.json()).then(result => console.log(result))
}


Get_User(1)
Delete_User(9)











