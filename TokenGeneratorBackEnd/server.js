// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Token = require('./modals/Token');
const cors = require('cors'); // Import the 'cors' package
const fs = require('fs/promises'); // Import the fs module to work with files



const app = express();
const port = process.env.PORT || 3004;
const apiBaseUrl = 'http://localhost:3004';
const tokenCountFilePath = 'tokenCount.json'; // Define the path to your JSON file


mongoose.connect('mongodb://localhost:27017/your-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(cors());

let deployedTokenCount = 0;

const readTokenCountFromFile = async () => {
    try {
      const data = await fs.readFile(tokenCountFilePath, 'utf8');
      if (data) {
        const jsonData = JSON.parse(data);
        if (jsonData && jsonData.count) {
          deployedTokenCount = jsonData.count;
        }
      }
    } catch (error) {
      // Handle errors, including the case where the file doesn't exist
      console.error('Error reading token count file:', error);
    }
  };
  
  // Read the token count from the file when the server starts
  readTokenCountFromFile();
  
  // GET endpoint to retrieve the deployed token count
  app.get('/api/tokenCount', (req, res) => {
    res.json({ count: deployedTokenCount });
  });
  
  // POST endpoint to update the deployed token count
  app.post('/api/tokenCount', async (req, res) => {
    try {
      // Extract the new count from the request body
      const newCount = req.body.count;
  
      // Update the deployedTokenCount variable
      deployedTokenCount = newCount;
  
      // Update the JSON file with the new count
      await fs.writeFile(tokenCountFilePath, JSON.stringify({ count: newCount }));
  
      res.status(201).json({ message: 'Token count updated successfully' });
    } catch (error) {
      console.error('Error updating token count:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Define your API routes here
// API endpoint to store token information
app.post('/api/tokens', async (req, res) => {
    try {
      const { walletAddress, tokenName, tokenSymbol, initialSupply, decimals, tokenAddress, deploymentTxHash } = req.body;
  
      // Create a new token document
      const token = new Token({
        walletAddress,
        tokenName,
        tokenSymbol,
        initialSupply,
        decimals,
        tokenAddress,
        deploymentTxHash,
      });
  
      // Save the token document to the database
      await token.save();
  
      res.status(201).json({ message: 'Token information saved successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving token information.' });
    }
  });
  
  // API endpoint to retrieve tokens associated with a wallet address
  app.get('/api/tokens/:walletAddress', async (req, res) => {
    try {
      const walletAddress = req.params.walletAddress;
  
      // Retrieve tokens associated with the specified wallet address
      const tokens = await Token.find({ walletAddress });
  
      res.status(200).json(tokens);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching token information.' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
