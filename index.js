let signupbtn=document.getElementById("signupbtn");
let signinbtn=document.getElementById("signinbtn");
let namefield=document.getElementById("namefield");
let cpassword=document.getElementById("cpassword");
let tittle=document.getElementById("tittle");

signinbtn.addEventListener("click",()=>{
    namefield.style.maxHeight="0";
    cpassword.style.maxHeight="0";
    tittle.innerText="sign in"
    signinbtn.classList.remove("disable");
    signupbtn.classList.add("disable");


});
signupbtn.addEventListener("click",()=>{
    namefield.style.maxHeight="60px";
    cpassword.style.maxHeight="60px";
    tittle.innerText="sign up";
    signinbtn.classList.add("disable");
    signupbtn.classList.remove("disable");
    

});