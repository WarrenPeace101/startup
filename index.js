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

    if (await DB.getUser(req.body.frogName)) {
      res.send({
        id : user._id,
    });
        //res.status(409).send({msg: 'Frog Already Exists!'});
    } else {

        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const user = await DB.createUser(req.body.frogName, passwordHash);
        //setAuthCookie(res, user.token);
        res.send({
            id : user._id,
        });
    }
})

/*apiRouter.get('/auth/create', async (req, res) => {
  const user = await DB.getUserByPassword(req.params.password)
  if (user) {
      const token = req?.cookies.token;
      res.send({frogName : user.frogName, authenticated: token === user.token});
      return;
  }
});*/

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

    //console.log(req.body);

    const user = await DB.getUser(req.body.frogName);
  
    console.log(user);

    if (user) {

        if (await bcrypt.compare(req.body.password, user.password)) {
          //if (user.password === req.body.password) {
            //setAuthCookie(res, user.token);
            res.send({id : user._id});
            //return;
        }
        else {
            console.log("user, no bycrpyt");
            res.status(401).send({msg: 'Unauthorized'});
            console.log("user, no bycrpyt");
        }
    }
    else {
        console.log("no user");
        res.status(401).send({msg: 'Unauthorized'});
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

/*var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use( async (req, res, next) => {
    authToken = req.cookies[authCookieName];
    const user = await DB.getUserByToken(authToken);
    if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});*/

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

new PeerProxy(httpService);







