let inputArea = document.querySelector('div.input-area');
let inputAreaInput = document.querySelector('.input-area-input');
let inputBtn = document.querySelector('.input-area-button');
let toDoList = document.querySelector('.todolist');
let divInput =document.querySelector('div.add-input');
const pattern = /( [a-z|A-Z])/g;
divInput.style.display = "none";
setInterval(() => {
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    inputArea.style.color = `rgb(${red},${green},${blue})`;
    inputArea.style.borderColor = `rgb(${red},${green},${blue})`;
    inputArea.style.boxShadow = `0px 5px 5px rgb(${red},${green},${blue})`;
}, 1000);

inputArea.addEventListener("mouseover" ,() =>{
    inputArea.style.paddingBottom = "500px"
    setTimeout(function(){
        divInput.style.display = "block";
    }, 1000); 
})
inputBtn.addEventListener("click", () => {
    if (!pattern.test(inputAreaInput.value)) {
        let toaster = document.querySelector('[role = alert]');
        toaster.classList.add("show");
        inputAreaInput.style.borderColor = "red";
    }
    else {
        inputAreaInput.style.borderColor = "cyan";
        let newLi = document.createElement("li");
        let newLiBtn = document.createElement("button");
        newLi.innerHTML = inputAreaInput.value;
        toDoList.appendChild(newLi);
        newLi.style.borderColor = "cyan";
        newLiBtn.innerHTML = "X";
        newLiBtn.style.color = "cyan";
        newLi.appendChild(newLiBtn);
        inputAreaInput.value = "";
        newLiBtn.addEventListener("click", () => {
        toDoList.removeChild(newLi);
        })
    }

})


