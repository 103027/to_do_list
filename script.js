// // const ToDo_arr = [];
// let count = 1 ;
// function addInTodoList(){
//     Text = document.getElementById("add").value;
//     if (Text !== "")
//     {
//         let list = document.createElement("li");
//         list.id = count;
//         list.innerHTML = '<label for="mark-' + count + '"></label>' + '<input type="checkbox" ' + 'id="mark-' + count + '"' + 'name="mark"></input>' + Text + '<button id="' + count +'"' + ' onclick="removeFromToDoList(this.id)">X</button>';
//         document.getElementById("todo-list").appendChild(list);
//         count = count+1;
//         document.getElementById("add").value = "";
//     }
//     else{
//         alert("Write something to add in your list!!!");
//     }
// }

// function removeFromToDoList(clicked){
//     const element = document.getElementById(clicked);
//     element.remove();
// }




// By Using Arrays
let ToDo_arr = [];
function renderList(){
    const ul  = document.getElementById("todo-list");
    ul.innerHTML = "";
    for(let i = 0 ; i < ToDo_arr.length ; i++){
        let list = document.createElement("li");
        list.id = i;
        list.innerHTML = '<label for="mark-' + i + '"></label>' + '<input type="checkbox" ' + 'id="mark-' + i + '"' + 'name="mark"></input>' + ToDo_arr[i] + '<button id="' + i +'"' + ' onclick="removeFromToDoList(this.id)">X</button>';
        ul.appendChild(list);
    }
}

function addInTodoList(){
    Text = document.getElementById("add").value;
    if (Text !== "")
    {
        ToDo_arr.push(Text);
        document.getElementById("add").value = "";
        renderList();
    }
    else{
        alert("Write something to add in your list!!!");
    }
}
function removeFromToDoList(clicked){
    ToDo_arr.splice(clicked,1);
    renderList()
}