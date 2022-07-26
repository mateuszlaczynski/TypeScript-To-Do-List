import { Task, Category } from "./types/types";
import { render, renderCategories } from "./helpers/render-tesks-render.js";

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category; 

const categories: Category[] = ["general", "gym", "hobby"]

const tasks: Task[] = [
    {title:"Feed the cat", done:false, category:"general"},
    {title: "Go to the gym", done:false, category:"gym"},
    {title:"Buy new shoes",done:false, category:"hobby"}];


const addTask = (task: Task) => {
    tasks.push({title: task.title, done:task.done, category:task.category});
}

const upadteSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title:taskNameInputElement.value, done:false, category: selectedCategory});
    render(tasks, tasksContainerElement);
});

renderCategories(categories, categoriesContainerElement, selectedCategory, upadteSelectedCategory);
render(tasks, tasksContainerElement);