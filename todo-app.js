(function(){

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list
    }


    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        form.classList.add('form-control');
        input.placeholder = 'Text new todo'
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Add todo';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        }
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-item-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Done';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup)

        return {
            item,
            doneButton,
            deleteButton
        }
    }

    function createTodoApp(container, title = 'todo list') {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm);
        container.append(todoList);

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();

            if(!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);

            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function() {
                if(confirm('Are you shure?')) {
                    todoItem.item.remove();
                }
            });
        });
    }
})