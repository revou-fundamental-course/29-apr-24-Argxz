const submitButton = document.getElementsByClassName("button-submit");
const nameInput = document.getElementById("name-input");
const emailInput =document.getElementById("email-input");
const interestInput =document.getElementById("interest-input");
const nameOutput =document.getElementById("username");
const emailOutput =document.getElementById("email");
const interestOutput =document.getElementById("interest");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton[0].addEventListener("click", function() {
    if (nameInput.value.length != 0 && emailInput.value.length != 0 && interestInput.value === '') {
        alert("Selamat Datang");
    } else {
        if (nameInput.value.length != 0) {
            nameOutput.innerHTML = ""; // Hilangkan output untuk nama jika sudah diisi
        } else {
            nameOutput.innerHTML = "Nama tidak boleh Kosong";
        }
        if (emailInput.value.length != 0 && emailPattern.test(emailInput.value)) {
            emailOutput.innerHTML = ""; // Hilangkan output untuk email jika sudah diisi
        } else {
            emailOutput.innerHTML = "Email tidak boleh kosong dan harus valid";
        }
        if (interestInput.value === '') {
            interestOutput.innerHTML = ""; // Hilangkan output untuk minat jika sudah dipilih
        } else {
            interestOutput.innerHTML = "Minimal pilih salah satu";
        }
    }
});

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


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex+=n);
}
function showDivs(n){
    var i;
    var imgList= document.getElementsByClassName("img-slide");
    if(n>imgList.length){slideIndex=1}
    if (n<1){slideIndex=imgList.length};
    for (i=0; i<imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(()=>{
    plusDivs(1);
},1200);