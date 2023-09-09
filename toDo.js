 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container");

 function addTask(){
     if(inputBox.value === ''){
         alert("Please! Write Something !!");
    }
     else{
         let li = document.createElement("li"); //creates element called <li> and stores that in variable li
         li.innerHTML = inputBox.value;  //update li with the text written in the inputBox
         listContainer.appendChild(li); //now shows the text in listContainer
        
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
     }
     inputBox.value = "";
     saveData(); //update the content whenever the browser refresh or reopen
 }

 listContainer.addEventListener("click", function(e){ //added eventListener click
     if(e.target.tagName === "LI"){                   
        e.target.classList.toggle("checked");   /*if li is clicked it should add checked element
                                                   if the clecked class is already there, it removes that*/ 
                                                   saveData(); //update the content whenever the browser refresh or reopen                                            
    }                                         
     else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove(); //if we clicked span element thant it should delete parent element (li) Element
         saveData(); //update the content whenever the browser refresh or reopen
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //stored in our browser in the name of "data"
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data"); //load the stored data
}
showList();
