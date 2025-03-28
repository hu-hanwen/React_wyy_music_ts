const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  webpack: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
