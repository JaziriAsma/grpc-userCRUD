const client = require('./client')
client.list({}, (error, users) => {
    if (!error) {
        console.log('successfully fetch List users')
        console.log(users)
    }
})