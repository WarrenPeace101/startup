const bcrypt = require('bcrypt');
const express = require('express');
const cookieParser = require('cookie-parser');
const DB = require('./database.js');
const { PeerProxy } = require('./peerProxy.js');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {

    const user = await DB.getUser(req.body.frogName);

    if (user) {
      res.send({
        id : user._id,
    });
    } else {

        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const user = await DB.createUser(req.body.frogName, passwordHash, req.body.frogColor);
        res.send({
            id : user._id,
        });
    }
})

apiRouter.get('/user/:password', async (req, res) => {
  const user = await DB.getUser(req.params.password)
  if (user) {
      const token = req?.cookies.token;
      res.send({frogName : user.frogName, authenticated: token === user.token});
      return;
  }
  else {
      res.status(404).send({msg : 'Unknown'});
  }
});

apiRouter.post('/auth/login', async (req, res) => {

    const user = await DB.getUser(req.body.frogName);
 
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send(user);
        }
    }
})

apiRouter.delete('auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
})

apiRouter.get('/user/:email', async (req, res) => {
    const user = await DB.getUser(req.params.frogName)
    if (user) {
        const token = req?.cookies.token;
        res.send({frogName : user.frogName, authenticated: token === user.token});
        return;
    }
    else {
        res.status(404).send({msg : 'Unknown'});
    }
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

new PeerProxy(httpService);







