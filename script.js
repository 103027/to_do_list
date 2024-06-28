// const ToDo_arr = [];
let count = 1 ;
function addInTodoList(){
    // ToDo_arr.push(document.getElementById("add").value);
    // ToDo_arr[(ToDo_arr.length-1)]
    Text = document.getElementById("add").value;
    if (Text !== "")
    {
        let list = document.createElement("li");
        list.id = count;
        list.innerHTML = '<label for="mark-' + count + '"></label>' + '<input type="checkbox" ' + 'id="mark-' + count + '"' + 'name="mark"></input>' + Text + '<button id="' + count +'"' + ' onclick="removeFromToDoList(this.id)">X</button>';
        document.getElementById("todo-list").appendChild(list);
        count = count+1;
        document.getElementById("add").value = "";
    }
    else{
        alert("Write something to add in your list!!!");
    }
}

function removeFromToDoList(clicked){
    const element = document.getElementById(clicked);
    element.remove();
}