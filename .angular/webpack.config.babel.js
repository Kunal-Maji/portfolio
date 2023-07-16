module.exports = {
  // Existing configuration...

  module: {
    rules: [
      // Existing rules...

      // Add this rule for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Other configuration...
};
