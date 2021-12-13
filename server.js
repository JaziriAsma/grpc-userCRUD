const grpc = require('grpc')
const usersProto = grpc.load('users.proto')

const server = new grpc.Server()
const users = [
    { name: 'Asma', age: '24', profession: 'IT Student'},
    { name: 'Ali', age: '21', profession: 'Med Student'}
]

server.addService(usersProto.UserService.service, {
    list: (_, callback) => {
        callback(null, users)
    },
    get: (call, callback) => {
        let user = users.find((n) => n.name == call.request.name)
        if (user) {
            callback(null, user)
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    insert: (call, callback) => {
        let user = call.request
        users.push(user)
        callback(null, user)
    },
    update: (call, callback) => {
        let existingUser = users.find((n) => n.name == call.request.name)
        if (existingUser) {
            existingUser.age = call.request.age
            existingUser.profession = call.request.profession
            callback(null, existingUser)         
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    },
    delete: (call, callback) => {
        let existingUserIndex = users.findIndex((n) => n.name == call.request.name)
        if (existingUserIndex != -1) {
            users.splice(existingUserIndex, 1)
            callback(null, {})
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            })
        }
    }
})

server.bind('127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()
