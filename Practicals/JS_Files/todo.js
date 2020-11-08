//Selectors

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

//Event Handlers
todoButton.onclick = create;
todoList.onclick = checkdelete;


//Functions
function create(e) {
    if (todoInput.value != "") {
        e.preventDefault();

        var newDiv = document.createElement(div);
        newDiv.classList.add("todo");


        var newLi = document.createElement(li);
        newLi.classList.add("todo-items");
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);


        var checkbtn = document.createElement(button);
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var deletebtn = document.createElement(button);
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todoList.appendChild(newDiv);
        todoInput.value = "";
    } else {
        alert("Input Field can't be blank. Please enter a appropriate value.")
    }
}

function checkdelete(e) {
    var item = e.target;

    if (item.classList[0] === "delete-btn") {
        var parent = item.parentElement;
        parent.remove();
    }
    if (item.classList[0] === "check-btn") {
        var parent = item.parentElement;
        parent.classList.toggle("final");
    }

}