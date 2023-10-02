// models/Token.js

const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  walletAddress: String,
  tokenName: String,
  tokenSymbol: String,
  initialSupply: Number,
  decimals: Number,
  tokenAddress: String,
  deploymentTxHash: String,
});

module.exports = mongoose.model('Token', tokenSchema);
