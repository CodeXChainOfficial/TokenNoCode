module.exports = {
    // ... other Webpack configuration options ...
  
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        // Add other fallbacks if needed.
      },
    },
  };
  