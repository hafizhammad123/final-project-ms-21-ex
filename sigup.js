
const bbb=document.querySelector('#theek')
const sign=document.querySelector("#gg1")
const log=document.querySelector("#gg")
const name=document.querySelector("#form3Example1c").value
var email=document.querySelector("#form3Example3c").value
var pass=document.querySelector("#form3Example4c").value
var rep=document.querySelector("#form3Example4cd").value

name.innerHTML

function res(e){
    
event.preventDefault()
    console.log("hhhhh")
    const name=document.querySelector("#form3Example1c").value
    var email=document.querySelector("#form3Example3c").value
    var pass=document.querySelector("#form3Example4c").value
    var rep=document.querySelector("#form3Example4cd").value
    
    const naam= name.value;
    const email1=email.value;
    const password=pass.value;
    const repPass=rep.value;
  
    
   
   localStorage.setItem("name1",name)
   localStorage.setItem("email1",email)
   localStorage.setItem("password",pass)
   localStorage.setItem("rep password",rep)
   

    window.location.href="login.html"
   
   
    
  }
  