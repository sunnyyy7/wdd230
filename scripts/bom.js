const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Reference the unordered list HTML element

button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Adding a class for styling purposes

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    } else {
        // Provide a message or at least do nothing and return the focus to the input field
        input.focus();
    }
});