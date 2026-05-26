const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');

const app = express();

const memoryStore = new session.MemoryStore();

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

const keycloak = new Keycloak(
  { store: memoryStore },
  {
    realm: 'semillero-realm',
    'auth-server-url': 'http://localhost:8080',
    resource: 'dummy-app',
    publicClient: true
  }
);

app.use(keycloak.middleware());

app.get('/', keycloak.protect(), (req, res) => {
  const user = req.kauth.grant.id_token.content;

  res.send(`
    <h1>Hola Mundo, ${user.name}</h1>
  `);
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});
