const client = require('./client')

const updateUser = {
    name: 'Asma',
    age: '24',
    profession: 'Pianist'
}

client.update(updateUser, (error, user) => {
    if (!error) {
        console.log('User has been updated successfully', user)
    } else {
        console.error(error)
    }
})