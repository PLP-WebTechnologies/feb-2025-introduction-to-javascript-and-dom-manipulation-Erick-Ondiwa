// Function to change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    let paragraph = document.querySelector('#content p');
    paragraph.textContent = 'The text has been changed dynamically!';
    paragraph.classList.add('highlight'); // Adds a CSS class to change text style
});

// Function to add a new element to the DOM
document.getElementById('addElementBtn').addEventListener('click', function() {
    let newElement = document.createElement('div');
    newElement.textContent = 'This is a new dynamically added element.';
    newElement.style.backgroundColor = 'lightblue';
    newElement.style.padding = '10px';
    document.querySelector('#content').appendChild(newElement);
});

// Function to remove the last element from the DOM
document.getElementById('removeElementBtn').addEventListener('click', function() {
    let content = document.querySelector('#content');
    if (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
});
