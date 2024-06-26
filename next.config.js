// next.config.js
const withLess = require('next-plugin-less');

module.exports = withLess({
  lessLoaderOptions: {
    // 这里可以根据需要配置 Less loader 选项
    javascriptEnabled: true,
  },
  // 其他 Next.js 配置选项
});