const ulRef = document.querySelector("#categories");
const numbOfCategor = ulRef.children.length;
console.log(`Number of categories: ${numbOfCategor}`);

const liItemRef = ulRef.querySelectorAll(".item");
liItemRef.forEach((oneLi) => {
  console.log("Category:", oneLi.querySelector("h2").textContent);
  console.log("Elements:", oneLi.querySelector("ul").children.length);
});
