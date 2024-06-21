// ATTEMPT 2 22/10/2023

// const userInput = document.getElementById("content");
// const addBtn = document.getElementById("Add");
// const listItm = document.getElementById("list");
// let counter = 1;
// const template = document.querySelector("template");
// const tempcontent = template.content.cloneNode(true);

// document.addEventListener("DOMContentLoaded", function() {
//     function additem (){
//         var inputUser = document.querySelector("#content").value;
//         console.log(inputUser);

//         tempcontent.querySelector("li").innerText = inputUser;
//         document.body.append.tempcontent;
//     };
//     document.getElementById("Add").addEventListener("click", additem);

// });

// ATTEMPT 2 22/10/2023

// function additem (){

//         var inputUser = document.querySelector("#content").value;
//         console.log(inputUser)
//         var listitm = document.createElement("li");
//         listItm.innerHTML = inputUser;
//         listItm.appendChild(listitm);
//         userInput.value = "";
//         userInput.focus();
// };

// document.getElementById("Add").addEventListener("click", additem);

document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("content");
    const addBtn = document.getElementById("Add");
    const listItm = document.getElementById("list");
    const template = document.querySelector("template");
    const removeBtn = document.getElementById("Remove");

    addBtn.addEventListener("click", function () {
        const inputUser = userInput.value;
        console.log(inputUser);

        const tempcontent = template.content.cloneNode(true);
        tempcontent.querySelector("li").innerText = inputUser;

        listItm.appendChild(tempcontent);
    });

    removeBtn.addEventListener("click", function () {
        const firstListItm = listItm.firstChild;
        listItm.removeChild(firstListItm);
    });
});

//Things Learnt

// TEMPLATE TAG IN ACTION, ACCESSING CONTENT IN IT, USING IT
// Query Selectors and appending to them
// EVENT LISTENERS
// VARIABLES
// IMPORTANCE OF CONSOL.LOG FOR DEBUGGING

// MISTAKES MADE

// lOGCIAL ERROR OF THINKING WHEN THE BUTTON CLICKS RUN A FUNCTION NOT EVERYTIME THE BUTTON CLICKS RUN THIS CODE SO IT DOES IT OVER AND OVER INSTEAD OF OVERRIDING
// Variables Dont dynamiccly update so ensure that when im making a variable its going ot register what i want
