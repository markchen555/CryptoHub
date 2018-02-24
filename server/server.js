import express from 'express';
import path from "path";
import constants from './config/constants';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './router';

// Initial exprss server
const app = express();

// Middleware
middlewaresConfig(app);

console.log('=======================================================');
console.log(constants);
console.log('=======================================================');

// Router
apiRoutes(app);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        Listening on port ${constants.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
    `);
  }
})
