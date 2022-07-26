import { Category, Task } from "../types/types";

export const render = (
    tasks: Task[],
    tasksContainerElement: HTMLElement
    ) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {

        const taskElement: HTMLElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement: HTMLLabelElement = document.createElement('label');
        labelElement.innerText = task.title;

        const id: string = `task-${index}`

        labelElement.setAttribute("for", id) 

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox"
        checkboxElement.name = task.title
        checkboxElement.id = id
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done
        })

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};

export const renderCategories = (
    categories: Category[],
    categoriesContainerElement: HTMLElement,
    selectedCategory: Category,
    inputChangeCallback: (category: Category) => void
    ) => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement("li");
        
        const radioInputElement: HTMLInputElement = document.createElement("input");
        radioInputElement.type = 'radio';
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", ()=> {
            inputChangeCallback(category);
        })

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute('for', `category-${category}`);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement)

        categoriesContainerElement.appendChild(categoryElement);
    })
}
