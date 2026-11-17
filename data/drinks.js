globalThis.drinkAtlas = {
  categories: ["茶飲", "咖啡", "奶飲", "果飲"],
  drinks: [
    {
      id: "pearl-milk-tea", name: "珍珠奶茶", category: "茶飲",
      description: "濃紅茶與鮮奶托住黑糖珍珠，喝得到茶香，也嚼得到黑糖香。",
      temperature: "冰飲", servings: "1 杯", prepTime: 25, difficulty: "中等", caffeine: "有",
      flavorTags: ["茶香", "奶香", "Q 彈"],
      ingredients: [["濃紅茶", 150, "ml"], ["鮮奶", 100, "ml"], ["快煮珍珠（乾）", 35, "g"], ["黑糖", 15, "g"], ["冰塊", "適量"]],
      steps: ["依包裝指示把珍珠煮到熟透，瀝乾後趁熱拌入黑糖。", "把珍珠和糖汁放進杯底，再加入冰塊。", "倒入放涼的紅茶與鮮奶，喝前攪勻。"],
      tips: "不同品牌的珍珠煮法差異很大，製作時間以包裝為準。珍珠現煮現喝口感最好。"
    },
    {
      id: "honey-lemon-green-tea", name: "蜂蜜檸檬綠茶", category: "茶飲",
      description: "清爽綠茶帶出檸檬皮的香氣，最後留一點蜂蜜的甜。",
      temperature: "冰飲", servings: "1 杯", prepTime: 10, difficulty: "簡單", caffeine: "有",
      flavorTags: ["酸甜", "清爽", "茶香"],
      ingredients: [["綠茶包", 1, "包"], ["熱水", 220, "ml"], ["檸檬汁", 20, "ml"], ["蜂蜜", 15, "ml"], ["冰塊", "適量"]],
      steps: ["用約 80°C 的熱水泡綠茶 2 至 3 分鐘，取出茶包。", "茶稍微放涼後拌入蜂蜜，再加入檸檬汁。", "倒進裝冰塊的杯子，攪拌後試味。"],
      tips: "檸檬汁可以先加一半，依檸檬酸度慢慢補足。"
    },
    {
      id: "winter-melon-lemon", name: "冬瓜檸檬", category: "茶飲",
      description: "冬瓜糖的焦甜遇上檸檬酸香，是一杯熟悉的台式消暑飲料。",
      temperature: "冰飲", servings: "1 杯", prepTime: 5, difficulty: "簡單", caffeine: "無",
      flavorTags: ["酸甜", "冬瓜香", "清爽"],
      ingredients: [["冬瓜濃縮露", 45, "ml"], ["冷水", 200, "ml"], ["檸檬汁", 20, "ml"], ["冰塊", "適量"]],
      steps: ["將冬瓜露與冷水攪勻，先試甜度。", "加入檸檬汁，再倒進裝有冰塊的杯中。"],
      tips: "冬瓜濃縮露的甜度因品牌而異，可依瓶身建議調整比例。"
    },
    {
      id: "passion-fruit-green-tea", name: "百香果綠茶", category: "茶飲",
      description: "百香果香氣明亮，綠茶收尾清爽，果籽增添爽脆口感。",
      temperature: "冰飲", servings: "1 杯", prepTime: 10, difficulty: "簡單", caffeine: "有",
      flavorTags: ["果香", "酸甜", "茶香"],
      ingredients: [["綠茶包", 1, "包"], ["熱水", 200, "ml"], ["百香果", 1, "顆"], ["糖漿", 15, "ml"], ["冰塊", "適量"]],
      steps: ["用約 80°C 的熱水泡綠茶 2 至 3 分鐘，取出茶包後放涼。", "挖出百香果果肉和果籽，拌入綠茶與糖漿。", "將果茶倒入裝有冰塊的杯中。"],
      tips: "喜歡滑順口感時，可以先過濾一半的果籽。"
    },
    {
      id: "iced-americano", name: "冰美式", category: "咖啡",
      description: "冰水拉開濃縮咖啡的香氣，喝得到烘焙風味與清涼尾韻。",
      temperature: "冰飲", servings: "1 杯", prepTime: 5, difficulty: "簡單", caffeine: "有",
      flavorTags: ["烘焙香", "清爽", "微苦"],
      ingredients: [["濃縮咖啡", 40, "ml"], ["冷水", 140, "ml"], ["冰塊", "適量"]],
      steps: ["把冰塊與冷水放進杯中。", "萃取濃縮咖啡，倒在冰水上。", "輕輕攪拌，依口味調整水量。"],
      tips: "用較大的冰塊可讓冰融得慢一些。"
    },
    {
      id: "fresh-milk-tea", name: "鮮奶茶", category: "奶飲",
      description: "濃紅茶加上滑順鮮奶，香氣乾淨，微甜或無糖都好喝。",
      temperature: "冰飲", servings: "1 杯", prepTime: 10, difficulty: "簡單", caffeine: "有",
      flavorTags: ["奶香", "茶香", "滑順"],
      ingredients: [["紅茶包", 2, "包"], ["熱水", 150, "ml"], ["鮮奶", 120, "ml"], ["糖漿", 10, "ml"], ["冰塊", "適量"]],
      steps: ["以熱水沖泡紅茶約 4 分鐘，取出茶包。", "將糖漿拌入茶中，放涼後倒入裝冰塊的杯子。", "加入鮮奶，攪拌均勻。"],
      tips: "喜歡茶味重一點，可先減少鮮奶，再依口味補加。"
    },
    {
      id: "matcha-latte", name: "抹茶拿鐵", category: "奶飲",
      description: "抹茶的草木香遇上鮮奶，淡淡苦味讓每口更有層次。",
      temperature: "冰飲", servings: "1 杯", prepTime: 10, difficulty: "中等", caffeine: "有",
      flavorTags: ["抹茶香", "奶香", "微苦"],
      ingredients: [["抹茶粉", 3, "g"], ["溫水", 45, "ml"], ["鮮奶", 180, "ml"], ["糖漿", 10, "ml"], ["冰塊", "適量"]],
      steps: ["將抹茶粉過篩，加約 75°C 的溫水，用茶筅或小打蛋器打散。", "將鮮奶、糖漿與冰塊放入杯中，攪勻。", "將抹茶沿湯匙背慢慢倒進杯中，喝前攪拌。"],
      tips: "過篩能減少結塊，也方便在小碗裡快速打勻。"
    },
    {
      id: "hot-cocoa-milk", name: "可可牛奶", category: "奶飲",
      description: "無糖可可粉帶出濃厚巧克力香，適合捧著馬克杯慢慢喝。",
      temperature: "熱飲", servings: "1 杯", prepTime: 8, difficulty: "簡單", caffeine: "少量",
      flavorTags: ["可可香", "奶香", "濃郁"],
      ingredients: [["無糖可可粉", 8, "g"], ["鮮奶", 240, "ml"], ["砂糖", 12, "g"]],
      steps: ["將可可粉與砂糖放進小鍋，加入 2 大匙鮮奶調成滑順的糊。", "加入剩下的鮮奶，以小火加熱並持續攪拌。", "加熱到鍋邊出現小泡就關火，倒入馬克杯。"],
      tips: "想讓可可香更突出，可以加一小撮鹽。"
    },
    {
      id: "taiwanese-fruit-tea", name: "台灣水果茶", category: "果飲",
      description: "紅茶與柳橙汁做底，加上蘋果和鳳梨，像把一盤水果放進杯裡。",
      temperature: "冰飲", servings: "1 杯", prepTime: 15, difficulty: "簡單", caffeine: "有",
      flavorTags: ["果香", "酸甜", "茶香"],
      ingredients: [["紅茶包", 1, "包"], ["熱水", 120, "ml"], ["柳橙汁", 70, "ml"], ["蘋果丁", 30, "g"], ["鳳梨丁", 30, "g"], ["冰塊", "適量"]],
      steps: ["用熱水泡紅茶約 3 分鐘，取出茶包後放涼。", "把蘋果與鳳梨放進杯裡，加入冰塊。", "倒入柳橙汁與紅茶，輕輕混合後飲用。"],
      tips: "想換成當季水果，可以用柳橙片或少量百香果。"
    },
    {
      id: "mango-yogurt-smoothie", name: "芒果優格冰沙", category: "果飲",
      description: "冷凍芒果打出柔滑冰沙，原味優格帶來微微酸香。",
      temperature: "冰飲", servings: "1 杯", prepTime: 5, difficulty: "簡單", caffeine: "無",
      flavorTags: ["果香", "微酸", "濃郁"],
      ingredients: [["冷凍芒果丁", 150, "g"], ["無糖優格", 100, "g"], ["鮮奶", 60, "ml"]],
      steps: ["將鮮奶、優格與冷凍芒果依序放進果汁機。", "攪打到滑順，太稠時少量加入鮮奶再打。", "倒入杯中，趁冰涼享用。"],
      tips: "選擇熟透冷凍的芒果，通常就有足夠的甜味。"
    }
  ]
};
