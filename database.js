const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if ((!userName) || (!password) || (!hostname)) {
    throw Error('Set environment variables first');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('frogger').collection('user');

function getUser(frogName) {
    return userCollection.findOne({frogName : frogName});
}

function getUserByPassword(password) {
    return userCollection.findOne({password: password});
}

function getUserByToken(token) {
    return userCollection.findOne({token : token});
}

async function createUser(frogName, password, frogColor) {

    const user = {
        frogName : frogName,
        password : password,
        frogColor: frogColor, 
        token : uuid.v4()
    };

    await userCollection.insertOne(user);
    return user;
}

module.exports = {
    getUser,
    getUserByPassword,
    getUserByToken,
    createUser
  };