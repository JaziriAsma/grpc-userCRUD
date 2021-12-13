const client = require('./client')
let newUser = {
    
    name:"Mohamed",
    age: "30",
    profession: "Professor"
}

client.insert(newUser, (error, user) => {
    if (!error) {
        console.log('New User created successfully', user)
    } else {
        console.error(error)
    }
})
