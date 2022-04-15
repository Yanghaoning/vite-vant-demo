module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      exclude: /node_modules|folder_name/i
    },
  },
};
