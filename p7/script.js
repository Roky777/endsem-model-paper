Array.prototype.customFilter = function (callback, thisArg) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    if (callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

let product = [
  { id: 1, price: 20, name: "Mug" },
  { id: 2, price: 150, name: "Keyboard" },
  { id: 3, price: 30, name: "Notebook" },
  { id: 4, price: 80, name: "Mouse" },
];

let filArray = product.customFilter(function (product) {
  return product.price < 50;
});
let storefront = document.getElementById("storefront");
filArray.forEach((data) => {
  let article = document.createElement("article");
  article.textContent = `${data.name}: $${data.price}`;
  storefront.append(article);
});
