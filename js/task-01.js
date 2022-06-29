const listWithID = document.querySelector("#categories");

const categoryArray = document.querySelectorAll(".item");

console.log(`Number of categories : ${categoryArray.length}`);
const childEl = categoryArray.forEach(function (item) {
  console.log("Category : " + item.children[0].textContent);
  console.log("Elements :" + item.children[1].children.length);
});
console.log(`Number of categories : ${categoryArray.length}`);
const itemElements = listWithID.querySelectorAll(".item");
const results = itemElements.forEach(function (item) {
  console.log("Category : " + item.querySelector("h2").textContent);
  console.log("Elements :" + item.querySelectorAll("li").length);
});
