import { render, renderCategories } from "./helpers/render-tesks-render.js";
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "gym", "hobby"];
const tasks = [
    { title: "Feed the cat", done: false, category: "general" },
    { title: "Go to the gym", done: false, category: "gym" },
    { title: "Buy new shoes", done: false, category: "hobby" }
];
const addTask = (task) => {
    tasks.push({ title: task.title, done: task.done, category: task.category });
};
const upadteSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, selectedCategory, upadteSelectedCategory);
render(tasks, tasksContainerElement);
