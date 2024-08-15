module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|pdf|jpg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };
