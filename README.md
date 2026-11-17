# 一杯之間｜飲料圖鑑

10 款在家可做的飲料，每杯附同風格去背插圖、一人份材料、步驟和製作提示。圖鑑可按名稱或材料搜尋、依分類篩選，也可收藏飲料。收藏儲存在目前的瀏覽器。

## 本機開啟

直接用瀏覽器開啟 `index.html`。若要測試同一來源下首頁和食譜頁的收藏同步，請從這個目錄執行：

```sh
python -m http.server 8000
```

開啟 [本機圖鑑](http://localhost:8000/)。從圖鑑進入食譜頁，或開啟 `drink.html?id=matcha-latte` 測試分享網址。

## 新增內容

依 [AGENTS.md](AGENTS.md) 在 `data/drinks.js` 加入一筆資料，並放入同名去背插圖。首頁及食譜頁共用這份資料。插圖來源與生成提示詞記錄在 [插圖規格](docs/illustration-style.md)。

## 公開發布

將本目錄推送到 GitHub 公開儲存庫的 `main` 分支。在儲存庫的 **Settings → Pages** 將 **Source** 設為 **GitHub Actions**。首次設定後，可在 **Actions → Publish GitHub Pages → Run workflow** 手動部署，後續推送到 `main` 會自動更新。工作流程完成後，可在該次部署或 Pages 設定中找到公開網址。
