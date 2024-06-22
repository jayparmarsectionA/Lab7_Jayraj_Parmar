document.addEventListener('DOMContentLoaded', function() {
    const Form = document.getElementById('form');
    const Input = document.getElementById('input');
    const List = document.getElementById('list');

    Form.addEventListener('submit', function(event) {
        event.preventDefault();
        const Text = Input.value.trim();
        if (Text !== '') {
            addTask(Text);
            Input.value = '';
        }
    });

    function addTask(Text) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        const taskSpan = document.createElement('span');
        taskSpan.textContent = Text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
        List.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        List.appendChild(li);
    }
});
