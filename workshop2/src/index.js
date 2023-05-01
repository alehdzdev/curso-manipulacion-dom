import { registerImage } from "./lazy"

const minimum = 1
const maximum = 123
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';
    const image = document.createElement('img');
    image.className = "mx-auto";
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    container.appendChild(image)
    return container;
}

const mountNode = document.getElementById('images')
const addButton = document.querySelector('#add-button')
const deleteButton = document.querySelector('#delete-button')

const addImage = () => {
    const newImage = createImageNode()
    mountNode.appendChild(newImage)
    registerImage(newImage)
}

const deleteImages = () => {
    while (mountNode.firstChild) {
        mountNode.removeChild(mountNode.lastChild);
    }
}

deleteButton.addEventListener("click", deleteImages)
addButton.addEventListener("click", addImage)
