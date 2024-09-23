const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRoutes = require('./src/routes/userRoutes'); 

app.use('/api', userRoutes); 


app.get("/", (req, res) => {
    res.send("Alooooooooooo");
});

// Inicia o servidor
app.listen(port, () => {
    console.log("Servidor funcionando na porta 3000");
});