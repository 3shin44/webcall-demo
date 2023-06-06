const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 關閉雜湊檔名, 預設路徑為專案相對路徑
  publicPath:'./',
  filenameHashing: false,
  // 依輸出模式產生對應包裝資料夾
  outputDir: process.env.NODE_ENV == "production" ? 'dist_Prod':'dist_Dev'
})
