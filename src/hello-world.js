const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Array of 10 jokes
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
  "Why do Java developers wear glasses? Because they can't C#!",
  "What's a programmer's favorite hangout place? Foo Bar!",
  "Why did the programmer quit his job? Because he didn't get arrays!",
  "What do you call a programmer from Finland? Nerdic!",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25!",
  "What's the object-oriented way to become wealthy? Inheritance!",
  "Why did the developer go broke? Because he used up all his cache!",
  "How do you comfort a JavaScript bug? You console it!"
];

// Route to get a random joke
app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  
  res.json({
    joke: randomJoke,
    total: jokes.length
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! Visit /api/jokes for a random joke.'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Get a random joke at http://localhost:${PORT}/api/jokes`);
});
