module.exports = {
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {
      fix: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
      @import "@/assets/styles/main.scss";
        `,
      },
    },
  },
  filenameHashing: false,
};
