const submitButton = document.getElementsByClassName("button-submit");
const nameInput = document.getElementById("name-input");
const emailInput =document.getElementById("email-input");
const nameOutput =document.getElementById("username");
const emailOutput =document.getElementById("email");


submitButton[0].addEventListener("click",function(){
    if (nameInput.value.length !=0 && emailInput.value.length !=0){
        alert("Selamat Datang");
    } else{
        alert("Please fill out all fields!");  
    }
})

nameInput.addEventListener("input", function(){
    if (nameInput.value.length ===0){
        nameOutput.innerHTML="Nama tidak boleh kosong";
    }
})

emailInput.addEventListener("input",function(){
    if (emailInput.value.length ===0){
        emailOutput.textContent="Email tidak boleh kosong";
    }
})



const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", ()=>{
    menuList.classList.toggle("hidden");
})
