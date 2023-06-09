
const buttonsRef = document.querySelectorAll('.btn');
const displayRef = document.getElementById('disp');

let dispValue = "";

Array.from(buttonsRef).forEach((btn)=>{

    btn.addEventListener("click",()=>{
        if(btn.innerText == "="){
            dispValue = eval(dispValue);
            displayRef.value = dispValue;
        }
        else if(btn.innerText == "AC"){
            dispValue = "";
            displayRef.value = dispValue;
        }
        else if(btn.innerText == "X"){
            dispValue += "*";
            displayRef.value = dispValue;
        }
        else if(btn.innerText == "C"){
            dispValue = dispValue.substring(0,dispValue.length-1);
            displayRef.value = dispValue;
        }
        else{
            dispValue+=btn.innerText;
            displayRef.value = dispValue;

        }

    })

})