const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Custom routes
server.use('/api', router);

// Controller functions
const getRandomJokeByType = (jokeType) => {
  const jokes = router.db.get(`jokes.${jokeType}`).value();
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

// Random joke endpoints by type
server.get('/api/jokes/science', (req, res) => {
  const joke = getRandomJokeByType('science');
  res.json(joke);
});

server.get('/api/jokes/puns', (req, res) => {
  const joke = getRandomJokeByType('puns');
  res.json(joke);
});

server.get('/api/jokes/programming', (req, res) => {
  const joke = getRandomJokeByType('programming');
  res.json(joke);
});

server.get('/api/jokes/general', (req, res) => {
  const allJokes = [
    ...router.db.get('jokes.science').value(),
    ...router.db.get('jokes.puns').value(),
    ...router.db.get('jokes.programming').value()
  ];

  const randomIndex = Math.floor(Math.random() * allJokes.length);
  const joke = allJokes[randomIndex];
  res.json(joke);
});

server.get('/api/jokes/:type', (req, res) => {
  const jokeType = req.params.type;
  const joke = getRandomJokeByType(jokeType);

  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
});

// Start the server
server.use(middlewares);
server.listen(8080, () => {
  console.log('JSON Server is running on port 3000');
});
