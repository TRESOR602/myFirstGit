
// document.querySelector('')
// const baliseHTML=document.querySelector('h4');


const questionContainer=document.querySelector(".click-event");
const btn1=document.querySelector("#btn-1");
const btn2=document.querySelector("#btn-2");
const response=document.querySelector("p");
questionContainer.addEventListener("click", ()=>{
questionContainer.classList.toggle("question-clicked");
})
btn1.addEventListener("click", ()=>{
    // response.style.visibility="visible";
    response.classList.add("show-response");
    response.style.background="green";
});
btn2.addEventListener("click", ()=>{
    response.classList.add("show-response");
    response.style.background="red";
});
