const client = require('./client')

client.get({ name: 'Asma' }, (error, user) => {
    if (!error) {
        console.log('User feched successfully', user)
    } else {
        console.error(error)
    }
})
