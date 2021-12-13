const client = require('./client')

client.delete({ name: 'Mohamed' }, (error, _) => {
    if (!error) {
        console.log('User Has been successfully deleted')
    } else {
        console.error(error)
    }
})
            