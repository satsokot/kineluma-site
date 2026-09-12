const http = require('http');
const next = require('next');

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    http.createServer((req, res) => handle(req, res)).listen();
  })
  .catch((error) => {
    console.error('KineLuma failed to start:', error);
    process.exit(1);
  });
