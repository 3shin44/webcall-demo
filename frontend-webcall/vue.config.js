const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 關閉雜湊檔名, 預設路徑為專案相對路徑
  publicPath:'./',
  filenameHashing: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '新光金控Web Call'
    }
  }
})
