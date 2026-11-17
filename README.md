# Circulation 3D · 血液循環 3D 教學網站（V0.47）

這份為 **V0.47 GitHub 自動測試通過的完整靜態網站**（從已通過測試的網站 ZIP 原封保留所有網站資產），可直接部署 GitHub Pages，無需 npm、Three.js 另行下載或編譯。

## 這份壓縮檔怎麼用？

1. **先解壓縮 ZIP**，不是把 ZIP 本身上傳 GitHub。
2. 登入 GitHub，選 **New repository**，建議名稱 `Circulation-3D`，選 **Public**，**不要勾選 `Add a README file`**（壓縮包已附 README）。
3. 建立後進入 **Code → Add file → Upload files**。
4. 將解壓縮後看到的 **所有檔案和資料夾**上傳到倉庫根目錄：`index.html`、`style.css`、`js/`、`models/`、`vendor/`、`sw.js`、`asset-manifest.json` 等，最後按 **Commit changes**。
5. 進入 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
6. Pages 完成部署後，若倉庫名稱是 `Circulation-3D`，網址通常為：
   `https://pipipopo7410.github.io/Circulation-3D/`
   （以 GitHub Pages 顯示的實際網址為準）。

## 上傳前一定要確認

- GitHub 倉庫首頁最上層**直接看得到 `index.html`**（不能藏在 `Circulation-3D-v0.47-GitHub-Pages/` 資料夾內）。
- `js`、`models`、`vendor` 三個資料夾都在根目錄，且內部檔案完整。
- **不能只上傳 ZIP 檔**，因為 GitHub Pages 不會自動解壓縮 ZIP。
- 此為新建立的**公開教師預覽網站**，不要覆蓋先前的 `bloodtest` 私人 QA 倉庫或其他正式教學網站。

## 已有功能與測試邊界

- 真實血管 GLB 3D、三級可見度 643／159／68、心臟及左右肺簡化外形（三種透明模式）、心肺與體循環各十站動畫、A→B 路徑探索、縮放保護、相機視角恢復。
- GitHub QA（V0.47）已通過自動測試；**教師操作體驗與實體 iPad Safari 尚待驗收**。
- 初次使用時請連上網路，讓網站載入必要檔案；網頁內建離線快取，但設備是否能離線使用仍需實機確認。
- 原始模型與外部程式庫的來源及授權詳見 `ATTRIBUTION.md` 與 `vendor/three/LICENSE`。

## 完整性

`asset-manifest.json` 是 **原本通過 GitHub 自動驗證的 38 份網站資源**清單。所有原網站資源均未修改，另外新增本 README.md 與空白 `.nojekyll`，不影響既有驗證過的程式。
