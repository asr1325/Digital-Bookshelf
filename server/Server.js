const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Account = require('./Models/account');
const Books = require('./Models/bookModel');


app.use(cors());
app.use(express.json());


app.get('/', function (req, res)
{
    res.send('hello');
})

//database connection
mongoose.connect("mongodb+srv://adityasrawat21:RlqBHxQGYhgkkIsg@cluster0.cedtvey.mongodb.net/Book?retryWrites=true&w=majority&appName=Cluster0")  
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });


// register user
app.post('/register', async function(req, res)
{
    try{
        const newUser = await Account.create(req.body);
        console.log(newUser);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
})

//login user 
app.post('/login', async function(req, res)
{
    const {email, password} = req.body;
    try{
         const user = await Account.findOne({email});

         if(!user || user.password !== password)
         {
            return res.status(401).json({message: "Invalid email or password"})
            
         }
         res.status(200).json({ message: 'Login successful', user });
        }
        catch(error){
          res.status(500).json({ message: error.message });
    }
});

//add a book
app.post('/books', async (req, res) => {
  const { title, author, cover, email } = req.body;

  try {
    // Create a new book
    const book = await Books.create({ title, author, cover });
    // Find the user by email
    const user = await Account.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Add the book to the user's savedBooks list
    user.savedBooks.push(book._id);
    await user.save();

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/books/:email', async (req, res) => {
  const { email } = req.params;
  try {
    // Find the user by email
    const user = await Account.findOne({ email }).populate('savedBooks'); // Populate savedBooks field
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Respond with the list of books
    res.status(200).json(user.savedBooks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

//delete book 

app.delete('/books/:email/:bookId', async (req, res) => {
  const {email, bookId} = req.params;

  try{
    const user = await Account.findOne({email});
    if(!user){
      return res.status(404).json({error: 'User not found'});
    }

    user.savedBooks = user.savedBooks.filter((id) => id.toString() !== bookId);
    await user.save();

    res.status(200).json({ message: 'Book removed successfully' });
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000);