

//fetch search element 
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");

//fetch menu element
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector("#header .navbar");

//fetch slide element 
let slide = document.querySelectorAll(".home .slide");
let index = 0;


searchBtn.onclick = ()=>{
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

menu.onclick = ()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove("active");
}

window.onscroll = ()=>{
    searchBtn.classList.remove("fa-times");
    searchForm.classList.remove("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}

function next(){
    slide[index].classList.remove("active");
    index = (index+1)%slide.length;
    slide[index].classList.add("active");
}

function prev(){
    slide[index].classList.remove("active");
    index = ((index-1)+slide.length)%slide.length;
    slide[index].classList.add("active");
}

//using smtp server to send email for testing purpose

//fetch the mail info

function sendEmail(){
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "b7ae5384b52e0d",
        Password : "dc60d3887a19ed",
        To : 'xyz@test.com',
        From : document.getElementById("userEmail").value,
        Subject : "Stay connected with Christmas",
        Body : document.getElementById("userName").value + "<br>" + document.getElementById("userPhone").value + "<br>" + document.getElementById("userMessage").value
    }).then(
      message => alert("Your message is sent successfully.")
    );
}