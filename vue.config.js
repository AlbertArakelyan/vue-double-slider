module.exports = {
  configureWebpack: {
    output: {
      filename: 'index.js',
    },
    optimization: {
      splitChunks: false
    }
    
  },
};