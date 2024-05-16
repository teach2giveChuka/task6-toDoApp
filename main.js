let todoform = document.querySelector('.form');
let todo_text = document.querySelector(".todo-text");
let table = document.querySelector(".table-data");

let todolist_array = [];

todoform.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("clicked button");

    let input = todo_text.value.trim();
   

    let if_text = todo_text.value.trim() !== '';
    let object_data = {
        text: input,
        status: "active",
        completed: 0,
    }

    if(if_text){        
        todolist_array.push(object_data);
        console.log(todolist_array);
        todo_text.value = '';

        let tr = document.createElement('tr');
       let td = document.createElement('td');
        
        td.textContent =input;
        table.appendChild(td);
        
        
    }

})

