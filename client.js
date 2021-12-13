const PROTO_PATH = './users.proto';
const grpc = require('grpc');
const UserService = grpc.load(PROTO_PATH).UserService
const client = new UserService('localhost:50051',
    grpc.credentials.createInsecure());

module.exports = client