document.getElementById('button').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    let title1 = `Title: ${title}`
    let description1 = `Description: ${description}`
    const todo = document.createElement('div');
    todo.append(title1)
    todo.append(description1)
    document.getElementById('todo-list').appendChild(todo)
})