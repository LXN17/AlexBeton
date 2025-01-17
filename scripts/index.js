import { products } from "../data/products.js";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

let productsHTML = "";
products.forEach((category) => {
  productsHTML += `
    <div class="category">
      <h3>${category.category} <span>${category.unit}</span></h3>
      <table>
        ${category.items
          .map(
            (item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
          </tr>
        `
          )
          .join("")}
      </table>
    </div>
  `;
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("elementShow");
    }
  });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.1],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".showAnimation");

for (let elm of elements) {
  observer.observe(elm);
}
console.log(elements);

document.querySelector(".products").innerHTML = productsHTML;
