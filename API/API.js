const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // Import the cors middleware


const app = express();
const port = 3004;
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up file upload middleware using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Serve static files (e.g., uploaded images)
app.use('/uploads', express.static('uploads'));

// In-memory data store (for this example)
const savedData = {
  launchpadOptions: [],
  logoFile: null,
  daoAddress: '',
  walletAddresses: [],
  projectName: '',
  projectDescription: '',
  currencies: [],
  customCurrency: '',
  userHasToken: '',
  tokenAddress: '',
  chains: [],
  daoOption: '',
  incubationOption: '',
  dashboardOption: '',
  milestoneOption: '',
};

// Route to handle logo file upload
app.post('/api/set-logo', upload.single('logo'), (req, res) => {
  // Handle the uploaded logo file here (save or update)
  savedData.logoFile = req.file.path; // Store the file path for this example
  res.status(200).json({ message: 'Logo updated successfully' });
});

// Route to handle project description update
app.post('/api/set-project-description', (req, res) => {
  const { projectDescription } = req.body;
  // Handle the project description update here (save or update)
  savedData.projectDescription = projectDescription;
  res.status(200).json({ message: 'Project description updated successfully' });
});

// Route to handle project name update
app.post('/api/set-project-name', (req, res) => {
  const { projectName } = req.body;
  // Handle the project name update here (save or update)
  savedData.projectName = projectName;
  res.status(200).json({ message: 'Project name updated successfully' });
});

// Add more routes and handlers for other data as needed

// Route to handle form submission
app.post('/api/submit-form', (req, res) => {
  // Handle the form submission here and save all data
  // You can access all the data from req.body
  savedData.launchpadOptions.push(req.body.selectedLaunchpadOption);
  savedData.daoAddress = req.body.daoAddress;
  savedData.walletAddresses = req.body.walletAddresses;
  savedData.selectedCurrencies = req.body.selectedCurrencies;
  savedData.customCurrency = req.body.customCurrency;
  savedData.userHasToken = req.body.userHasToken;
  savedData.tokenAddress = req.body.tokenAddress;
  savedData.selectedChains = req.body.selectedChains;
  savedData.daoOption = req.body.selectedDaoOption;
  savedData.incubationOption = req.body.selectedIncubationOption;
  savedData.dashboardOption = req.body.selectedDashboardOption;
  savedData.milestoneOption = req.body.selectedMilestoneOption;

  res.status(200).json({ message: 'Form data saved successfully' });
});

app.get('/api/get-saved-data', (req, res) => {
  res.status(200).json(savedData); // Send the savedData object as JSON response
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
