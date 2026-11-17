const search = document.querySelector("#search");
const categoryGroup = document.querySelector("#categories");
const onlyFavorites = document.querySelector("#only-favorites");
const cards = document.querySelector("#cards");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const emptyMessage = document.querySelector("#empty-message");
let category = "";

function card(drink) {
  const article = create("article", "card " + tone(drink));
  const link = create("a", "card-link");
  link.href = recipeUrl(drink);
  const image = create("div", "card-image");
  image.append(illustration(drink));
  const content = create("div", "card-content");
  const meta = create("div", "card-meta");
  meta.append(create("span", "badge", drink.category), create("span", "", drink.prepTime + " 分鐘"));
  const title = create("h3", "", drink.name);
  link.setAttribute("aria-label", "查看" + drink.name + "食譜");
  content.append(meta, title, create("p", "flavors", drink.flavorTags.join(" · ")), create("span", "card-arrow", "↗"));
  link.append(image, content);
  article.append(link, favoriteButton(drink, false, () => {
    if (onlyFavorites.getAttribute("aria-pressed") === "true") {
      render();
      (cards.querySelector(".favorite") || onlyFavorites).focus();
    }
  }));
  return article;
}

function render() {
  const query = search.value.normalize("NFKC").trim().toLowerCase().split(/\s+/).filter(Boolean);
  const savedOnly = onlyFavorites.getAttribute("aria-pressed") === "true";
  const visible = drinks.filter(drink => {
    const words = [drink.name, ...drink.ingredients.map(([name]) => name)].join(" ").normalize("NFKC").toLowerCase();
    return (!category || drink.category === category)
      && (!savedOnly || favorites.has(drink.id))
      && query.every(term => words.includes(term));
  });
  cards.replaceChildren(...visible.map(card));
  count.textContent = "共 " + visible.length + " 款飲料";
  empty.hidden = visible.length > 0;
  emptyMessage.textContent = savedOnly && favorites.size === 0 ? "目前還沒有收藏的飲料。" : "找不到符合條件的飲料。";
}

const options = ["", ...categories].map(value => {
  const button = create("button", "", value || "全部");
  button.type = "button";
  button.setAttribute("aria-pressed", String(value === category));
  button.addEventListener("click", () => {
    category = value;
    for (const option of options) option.setAttribute("aria-pressed", String(option === button));
    render();
  });
  categoryGroup.append(button);
  return button;
});

search.addEventListener("input", render);
onlyFavorites.addEventListener("click", () => {
  onlyFavorites.setAttribute("aria-pressed", String(onlyFavorites.getAttribute("aria-pressed") !== "true"));
  render();
});
document.querySelector("#reset").addEventListener("click", () => {
  search.value = "";
  onlyFavorites.setAttribute("aria-pressed", "false");
  options[0].click();
  options[0].focus();
});

render();
