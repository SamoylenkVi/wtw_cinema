/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();

const pathToDB = path.join(__dirname, 'db.json');
const router = jsonServer.router(pathToDB);

const middlewares = jsonServer.defaults();

const PORT = 8080;

server.use(middlewares);
server.use('/api', router);
server.listen(PORT, () => {
  console.log(`Mock Server is running on port ${PORT}`);
});
