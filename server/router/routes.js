import { Router } from 'express';

const routes = new Router();

routes.get('/getPrices', (req, res) => {
  res.status(200).send('this is working')
})

export default routes;
