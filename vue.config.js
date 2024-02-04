const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-hanja-flashcards/" : "/",
  configureWebpack: (module.exports = {
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: "raw-loader",
        },
      ],
    },
  }),
});
