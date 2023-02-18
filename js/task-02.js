// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulRef = document.querySelector("#ingredients");

const liListRef = ingredients.map((name) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = name;
  return liRef;
});

ulRef.append(...liListRef);
