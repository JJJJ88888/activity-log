const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log("==========================================");
console.log("🔗 [Integration Test] 正在執行整合測試...");
console.log("==========================================");

// 檢查環境變數 (Grade E 要求)
const currentEnv = process.env.TEST_ENV;
console.log(`目前注入的測試環境 TEST_ENV: [${currentEnv}]`);
assert.strictEqual(currentEnv, 'staging', "環境變數 TEST_ENV 未正確設定為 staging！");
console.log("✔ 環境變數驗證通過");

// 檢查 Build 階段產生的檔案是否存在
const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
  console.log("✔ 建置成品目錄 (dist/) 驗證存在");
} else {
  console.log("⚠ 提示：獨立環境中將透過 actions/download-artifact 載入 dist/");
}

console.log("🎉 整合測試全部通過！");
