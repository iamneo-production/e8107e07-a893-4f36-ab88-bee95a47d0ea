const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors"); // Import the cors package

// Custom routes
server.use("/api", router);

// Controller function to get a random joke by type
const getRandomJokeByType = (jokeType) => {
  const jokes = router.db.get(`jokes.${jokeType}`).value();
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

// Define a single route that accepts the joke type as a parameter
server.get("/:type", (req, res) => {
  const jokeType = req.params.type; // Get the joke type from the URL parameter
  if (
    !["puns", "programming", "random", "science", "knockknock"].includes(
      jokeType
    )
  )
    return res.status(200);
  const joke = getRandomJokeByType(jokeType);
  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ error: "Joke type not found" });
  }
});

// Use CORS middleware to allow cross-origin requests
server.use(cors());

// Start the server
server.use(middlewares);
server.listen(8080, () => {
  console.log("JSON Server is running on port 8080");
});
