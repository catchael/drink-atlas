# 一杯之間

這是繁體中文的飲料圖鑑。訪客可以按類別或材料找飲料，在同一個瀏覽器收藏，並用獨立網址開啟一人份食譜。

## 頁面與檔案

- `index.html` 是圖鑑，`drink.html?id=<id>` 是共用食譜頁。
- `data/drinks.js` 是飲料資料的唯一來源。頁面使用原生 HTML、CSS 與 JavaScript，所有站內路徑保持相對路徑，讓 GitHub Pages 的專案子路徑和本機預覽都能載入。
- `js/shared.js` 放共用的圖片、連結與收藏邏輯。保留既有 ID 和收藏鍵，讓舊網址和已儲存的收藏繼續有效。
- `css/style.css` 使用奶油白、墨綠、分類淡色底與留白，標題用襯線字。調整版面後確認手機與桌面皆可閱讀。

## 新增飲料

1. 在 `data/drinks.js` 的 `drinks` 陣列加入一筆資料。唯一的 `id` 使用小寫英文和連字號，例如 `oolong-milk-tea`。沿用 `categories` 內的分類。
2. 填寫 `name`、`category`、`description`、`temperature`、`servings`、`prepTime`（正整數，單位為分鐘）、`difficulty`、`caffeine`、`flavorTags`、`ingredients`、`steps` 和 `tips`。材料順序為 `[名稱, 用量, 單位]`，用量為「適量」時可省略單位。步驟依實際製作順序填入字串陣列。
3. 依 [插圖規格](docs/illustration-style.md) 放入 `assets/images/drinks/<id>.png`，圖片格式為 512 × 512 的透明 PNG。可用選填的 `imageAlt` 提供更具體的替代文字。
4. 確認材料清單與步驟一致，並開啟圖鑑及該飲料的食譜網址。測試使用材料搜尋、分類篩選、收藏及窄螢幕排版。

食譜、按鈕和圖片說明使用繁體中文。精確營養數字和起源說法須有可核對的來源。新增分類時，也要在 CSS 加入對應的分類配色。
