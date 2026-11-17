const { categories, drinks } = globalThis.drinkAtlas;
const favoriteKey = "drink-atlas:favorites";
const favorites = readFavorites();

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(favoriteKey));
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function create(tag, classes, content) {
  const element = document.createElement(tag);
  if (classes) element.className = classes;
  if (content != null) element.textContent = content;
  return element;
}

function recipeUrl(drink) {
  return "drink.html?id=" + encodeURIComponent(drink.id);
}

function illustration(drink, eager = false) {
  const img = create("img");
  img.src = "assets/images/drinks/" + drink.id + ".png";
  img.alt = drink.imageAlt || drink.name + "的手繪插圖";
  img.width = img.height = 512;
  img.loading = eager ? "eager" : "lazy";
  return img;
}

function tone(drink) {
  return "tone-" + (categories.indexOf(drink.category) + 1);
}

function favoriteButton(drink, withLabel = false, onChange = () => {}) {
  const button = create("button", "favorite" + (withLabel ? " favorite-labeled" : ""));
  button.type = "button";
  const icon = create("span");
  icon.setAttribute("aria-hidden", "true");
  button.append(icon);
  const label = create("span");
  if (withLabel) button.append(label);

  function update() {
    const saved = favorites.has(drink.id);
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("aria-label", "收藏" + drink.name);
    icon.textContent = saved ? "♥" : "♡";
    label.textContent = saved ? "已收藏" : "收藏";
  }

  button.addEventListener("click", () => {
    if (favorites.has(drink.id)) favorites.delete(drink.id);
    else favorites.add(drink.id);
    try { localStorage.setItem(favoriteKey, JSON.stringify([...favorites])); } catch {
      // Keep the current page usable when browser storage is unavailable.
    }
    update();
    onChange();
  });
  update();
  return button;
}
