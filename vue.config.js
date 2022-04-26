const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      /* 电话是否注册 */
      "/phoneregistration": {
        target: "https://47unknowngroup.vercel.app/cellphone/existence/check",
        changOrigin: true,
      },
    },
  },
});
