const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.tsx'],
      options: {
        ...styleguide.options,
        proseWrap: 'preserve',
        functionDeclaration: {
          parameters: 'single',
        },
      },
    },
  ],
};
