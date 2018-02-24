import routes from './routes';

export default app => {
  app.use('/api/v1/', routes);
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};
