const recipe = document.querySelector("#recipe");
const id = new URLSearchParams(location.search).get("id");
const drink = drinks.find(entry => entry.id === id);

if (!drink) {
  recipe.append(create("h1", "", "找不到這款飲料"), create("p", "", "從圖鑑選一款飲料，就能查看完整食譜。"));
} else {
  document.title = drink.name + "食譜｜一杯之間";
  const intro = create("section", "recipe-intro " + tone(drink));
  const image = create("div", "recipe-image");
  image.append(illustration(drink, true));
  const summary = create("div", "recipe-summary");
  summary.append(
    create("span", "badge", drink.category),
    create("h1", "", drink.name),
    create("p", "", drink.description),
    create("p", "flavors", drink.flavorTags.join(" · ")),
    favoriteButton(drink, true)
  );
  intro.append(image, summary);

  const facts = create("dl", "facts");
  const details = [
    ["溫度", drink.temperature], ["份量", drink.servings], ["時間", drink.prepTime + " 分鐘"],
    ["難度", drink.difficulty], ["咖啡因", drink.caffeine]
  ];
  for (const [term, value] of details) {
    const item = create("div");
    item.append(create("dt", "", term), create("dd", "", value));
    facts.append(item);
  }

  const body = create("div", "recipe-body");
  const ingredients = create("section", "recipe-panel");
  const ingredientsList = create("ul", "ingredients");
  for (const [name, amount, unit] of drink.ingredients) {
    const row = create("li");
    row.append(create("span", "", name), create("span", "", unit ? amount + " " + unit : amount));
    ingredientsList.append(row);
  }
  ingredients.append(create("h2", "", "材料"), ingredientsList);

  const method = create("section", "recipe-panel");
  const steps = create("ol", "steps");
  for (const step of drink.steps) steps.append(create("li", "", step));
  const tip = create("aside", "tip");
  tip.append(create("h3", "", "製作小提示"), create("p", "", drink.tips));
  method.append(create("h2", "", "做法"), steps, tip);
  body.append(ingredients, method);
  recipe.append(intro, facts, body);
}
