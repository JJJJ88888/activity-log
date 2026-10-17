const assert = require('assert');

console.log("==========================================");
console.log("🚀 [Unit Test] 正在執行單元測試...");
console.log("==========================================");

// 基礎邏輯測試
assert.strictEqual(1 + 1, 2, "數學邏輯錯誤");
console.log("✔ 基本運算測試通過");

// 模擬覆蓋率計算與門禁 (Coverage Gate)
const shouldFail = process.env.FAIL_TEST === 'true';
const coverage = shouldFail ? 65 : 92;
const THRESHOLD = 80;

console.log(`📊 當前測試覆蓋率: ${coverage}% (及格門檻: ${THRESHOLD}%)`);

if (coverage < THRESHOLD) {
  console.error(`❌ [門禁攔截] 測試覆蓋率未達標 (${coverage}% < ${THRESHOLD}%)！終止流程。`);
  process.exit(1);
}

console.log("🎉 單元測試與覆蓋率門禁驗證全部通過！");
