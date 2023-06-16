





const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URI
const mongoURI = 'mongodb://127.0.0.1:27017/crmApp';

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for your MongoDB collection
const person1111Schema = new mongoose.Schema({
  name: String,
  email: String,
  mobile:Number,
  password: String,
 
});

// Create a model based on the schema
const person1111 = mongoose.model('person', person1111Schema);




// Define a route to create a new person
app.post('/person1111', (req, res) => {
  const { name, mobile, email, password } = req.body;
  const newPerson1111 = new person1111({ name, mobile, email, password });

  newPerson1111
    .save()
    .then((savedPerson1111) => {
      res.json(savedPerson1111);
    })
    .catch((error) => {
      console.error('Error saving student:', error);
      res.status(500).json({ error: 'Failed to save student' });
    });
});


app.post("/login",async(req,resp)=>{
let user= await person1111.findOne(req.bdoy);
if(user)
{
  resp.send(user)
}else{
  resp.send({result:"no user found"})
}

})


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

