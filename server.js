import express from "express";

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });



const port = 3117;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });