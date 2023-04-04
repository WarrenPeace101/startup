const bcrypt = require('bcrypt');
const express = require('express');
const cookieParser = require('cookie-parser');
const DB = require('./database.js');

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {

    if (await DB.getUser(req.body.frogName)) {
        //res.status(409).send({msg: 'Frog Already Exists!'});
    } else {
        const user = await DB.createUser(req.body.frogName, req.body.password);
        //setAuthCookie(res, user.token);
        res.send({
            id : user._id,
        });
    }
})

apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.frogName);

    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            //setAuthCookie(res, user.token);
            res.send({id : user._id});
            window.location.href = 'gamescreen.html';
            return;
        }
    }
    else {
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});







