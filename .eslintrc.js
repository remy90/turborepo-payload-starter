module.exports = {
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
};
