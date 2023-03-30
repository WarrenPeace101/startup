const MongoClient = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if ((!userName) || (!password) || (!hostname)) {
    throw Error('Set environment variables first');
}

const url = 'mongodb+srv://${userName}:${password}@${hostname}';

const client = new MongoClient(url);
const userCollection = client.db('frogger').collection('user');

function getUser(frogName) {
    return userCollection.findOne({frogName : frogName});
}

function getUserByToken(token) {
    return userCollection.findOne({token : token});
}

async function createUser(frogName, password) {

    const passwordHash = await bycrypt.hash(password, 10);

    const user = {
        frogName : frogName,
        password : passwordHash, 
        token : uuid.v4()
    };

    await userCollection.insertOne(user);
    return user;
}

module.exports = {
    getUser,
    getUserByToken,
    createUser
  };