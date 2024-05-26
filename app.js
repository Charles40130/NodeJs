const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());
console.log(path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));

// Route pour une autre URL
app.get('/about', (req, res) => {
  res.send('About us');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
