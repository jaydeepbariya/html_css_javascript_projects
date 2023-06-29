const inputBoxRef = document.getElementById('input-box');
const listContainerRef = document.getElementById('list-container');

function addTask(){
    if(inputBoxRef.value ===''){
        alert("You Must Write Something...");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBoxRef.value;
        listContainerRef.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBoxRef.value = '';
    saveData(); 
}

listContainerRef.addEventListener('click',(e)=>{
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
}, false);


function saveData(){
    localStorage.setItem("data", listContainerRef.innerHTML);
}

function showTasks(){
    listContainerRef.innerHTML = localStorage.getItem('data');
}

showTasks();

