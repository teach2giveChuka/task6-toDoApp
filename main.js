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

mode.addEventListener('click', ()=>{
    if(mode.id === 'l'){
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

    }

    else if(mode.id === 'd'){
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
        

    }
})






    // .toggle .dark{
    //     display: none;
    //     background-color: pink;
    // }

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

        let ctn = document.createElement('div');
        ctn.className="displaytd";
        // ctn.id = "wh3";
        let btn = document.createElement('btn');
        btn.className = "submit";
        let td = document.createElement('td');
        
        ctn.appendChild(btn);
        ctn.appendChild(td);

        td.textContent =input;
        table.appendChild(ctn);

        
        
        
    }

})

