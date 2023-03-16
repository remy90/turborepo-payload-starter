module.exports = {
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  root: true,
  extends: ["custom"],
};
