# 模型來源與授權聲明

本網站的原始 `models/arteries.glb` 與 `models/veins.glb` 由使用者提供，模型的原始來源為 SeemaBansal1 的 [3d-human-body-anatomy](https://github.com/SeemaBansal1/3d-human-body-anatomy) 專案（`web/public/models/`）。該專案說明血管模型取自 Z-Anatomy 資料並經過網頁化、簡化及 Draco 壓縮處理。

- **Z-Anatomy**：解剖模型，採 **CC BY-SA 4.0** 授權（需署名並依相同授權分享衍生模型）。
- **BodyParts3D / The Database Center for Life Science**：源頭解剖資料（Z-Anatomy 衍生來源；以原始資料版本及授權要求為準）。
- **SeemaBansal1 — 3d-human-body-anatomy**：提供本次使用的精簡動靜脈 GLB。
- **Three.js**：MIT License。

這個版本沒有宣稱新的模型著作權歸屬於本網站，也沒有更動原有 GLB 幾何。模型分類 JSON 與介面程式由本專案另外製作。若後續修改並重新散布模型，須遵守前述 CC BY-SA 授權與署名要求。

未加入器官（organs.glb）層。該來源專案指出其器官層中包含可能受非商業授權限制的第三方腎臟模型；本版本沒有使用該器官層。

## V0.24 分層衍生模型

`*-core-only.glb`、`*-main-extra.glb`、`*-fine-extra.glb` 以及獨立的 `*-main.glb`、`*-core.glb` 均從前述開源模型以 **無損複製壓縮血管構造** 的方式產生；沒有重繪血管或重新授權。原作者署名、CC BY-SA 4.0 等授權要求持續適用。詳見 `report/independent-integrity.json`。
