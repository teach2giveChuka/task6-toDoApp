document.addEventListener('DOMContentLoaded', () => {
    let todoform = document.querySelector('.form');
    let todo_text = document.querySelector(".todo-text");
    let table = document.querySelector(".table-data");
    let mode = document.querySelector(".toggle");
    let lightdiv = document.querySelector(".light");
    let darkdiv = document.querySelector(".dark");
    let wh1 = document.querySelector("#w");
    let wh2 = document.querySelector("#wh");
    let wh3 = document.querySelector("#wh3");
    let wh4 = document.querySelector('#wh4');
    let wh5 = document.querySelector('#wh5');
    let body = document.querySelector('#body');
    let btm = document.querySelector('#botm');
    let mainElement = document.querySelector('.main');
    let leftNav = document.querySelector('.lefttnav');
    let allFilter = document.querySelector('.all');
    let activeFilter = document.querySelector('.active');
    let completedFilter = document.querySelector('.completed');
    let clearCompletedBtn = document.querySelector('.clear');
    let todolist_array = [];
    let check = document.querySelector('.submit');



    check.addEventListener('click', ()=>{

    
        check.style.background = 'linear-gradient(to right, rgb(183, 0, 255), #6200ff)';
    
        setTimeout(()=>{
            check.style.background = 'transparent';
        }, 2000)
    })



// Modes


mode.addEventListener('click', ()=>{
    if(mode.id === 'l'){

        mainElement.classList.add('light-background');
        mainElement.classList.remove('dark-background');

        lightdiv.style.display = 'none';
        darkdiv.style.display = 'block';
        console.log(mode.id);
        mode.id = 'd';
        console.log(mode.id);

        wh1.style.color = "white";
        wh1.style.background = "#25273C";
        console.log(wh1.id);

        wh2.style.color = "white";
        wh2.style.background = "#25273C";

        console.log(wh3.id);

        wh3.style.color = "white";
        wh3.style.background = "#25273C";

        wh4.style.color = "white";
        wh4.style.background = "#25273C";

        wh5.style.color = "white";
        body.style.background = '#181824';

        btm.style.boxShadow = '1px 2px 10px rgb(20, 21, 31)';

        mainElement.classList.remove('light');
        mainElement.classList.add('dark');


        // mainElement.style.setProperty('--bg-image', `url('${imageUrl}')`);
        // let newImageUrl ='./images/bg-desktop-light.jpg';
        // changeBackgroundImage(newImageUrl);

    }

    else if(mode.id === 'd'){

        mainElement.classList.add('dark-background');
  mainElement.classList.remove('light-background');

        lightdiv.style.display = 'block';
        darkdiv.style.display = 'none';
        console.log(mode.id);
        mode.id = 'l';
        console.log(mode.id);

        wh1.style.color = "black";
        wh1.style.background = "white";

        wh2.style.color = "black";
        wh2.style.background = "white";

        wh3.style.color = "black";
        wh3.style.background = "white";

        wh4.style.color = "black";
        wh4.style.background = "white";

        wh5.style.color = "black";

        mainElement.classList.remove('dark');
        mainElement.classList.add('light');

        body.style.background = 'white';
        

    }
})





    

    function updateTodoList() {
        table.innerHTML = '';
        todolist_array.forEach((item, index) => {
            let ctn = document.createElement('div');
            ctn.className = "displaytd";
            let btn = document.createElement('button');
            btn.className = "submit";
            let td = document.createElement('td');
            td.textContent = item.text;
            if (item.status === 1) {
                td.classList.add('strikethrough');
                btn.style.background = 'linear-gradient(to right, rgb(183, 0, 255), #6200ff)';
            }
            ctn.appendChild(btn);
            ctn.appendChild(td);
            table.appendChild(ctn);

            btn.addEventListener('click', () => {
                item.status = item.status === 0 ? 1 : 0;
                updateTodoList();
            });
        });
        updateItemsLeft();
    }

    function updateItemsLeft() {
        let activeItems = todolist_array.filter(item => item.status === 0).length;
        leftNav.textContent = `${activeItems} items left`;
    }

    function filterTodos(filter) {
        let filteredTodos = [];
        if (filter === 'all') {
            filteredTodos = todolist_array;
        } else if (filter === 'active') {
            filteredTodos = todolist_array.filter(item => item.status === 0);
        } else if (filter === 'completed') {
            filteredTodos = todolist_array.filter(item => item.status === 1);
        }
        renderFilteredTodos(filteredTodos);
    }

    function renderFilteredTodos(filteredTodos) {
        table.innerHTML = '';
        filteredTodos.forEach((item, index) => {
            let ctn = document.createElement('div');
            ctn.className = "displaytd";
            let btn = document.createElement('button');
            btn.className = "submit";
            let td = document.createElement('td');
            td.textContent = item.text;
            if (item.status === 1) {
                td.classList.add('strikethrough');
                btn.style.background = 'linear-gradient(to right, rgb(183, 0, 255), #6200ff)';
            }
            ctn.appendChild(btn);
            ctn.appendChild(td);
            table.appendChild(ctn);

            btn.addEventListener('click', () => {
                item.status = item.status === 0 ? 1 : 0;
                filterTodos(currentFilter);
            });
        });
    }

    todoform.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = todo_text.value.trim();
        if (input !== '') {
            let object_data = {
                text: input,
                status: 0,        
            }
            todolist_array.push(object_data);
            todo_text.value = '';
            updateTodoList();
        }
    });

    clearCompletedBtn.addEventListener('click', () => {
        todolist_array = todolist_array.filter(item => item.status === 0);
        updateTodoList();
    });

    allFilter.addEventListener('click', () => {
        currentFilter = 'all';
        filterTodos(currentFilter);
    });

    activeFilter.addEventListener('click', () => {
        currentFilter = 'active';
        filterTodos(currentFilter);
    });

    completedFilter.addEventListener('click', () => {
        currentFilter = 'completed';
        filterTodos(currentFilter);
    });

    updateTodoList();
});
