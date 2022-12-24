const home = document.getElementById("home-section")
const projects = document.getElementById("projects-section")
const contact = document.getElementById("contact-section")

const navbar = document.querySelector(".nav-items").children
const leftBottom = document.querySelector(".home-left-bottom .nav-element")


const nav1 = document.getElementsByClassName("nav1")
const nav2 = document.getElementsByClassName("nav2")
const nav3 = document.getElementsByClassName("nav3")

 const contactLeft = () => {
    event.preventDefault();
    home.style.transform = "translateX(100%)"
    projects.style.transform = "translateX(100%)"
    contact.style.transform = "translateX(0)"
    
    home.style.transitionDelay = "00s"
    projects.style.transitionDelay = "00s"
    contact.style.transitionDelay = "0.5s"

 }
 

 for(let i = 0; i < navbar.length; i++){
     navbar[i].addEventListener("click", function(){
       
        let dataFilter = navbar[i].getAttribute('data-nav');

        if(dataFilter == "home"){
            home.style.transform = "translateX(0)"
            projects.style.transform = "translateX(100%)"
            contact.style.transform = "translateX(100%)"
            
            home.style.transitionDelay = "0.5s"
            projects.style.transitionDelay = "00s"
            contact.style.transitionDelay = "00s"

        }
        if(dataFilter == "projects"){
            home.style.transform = "translateX(100%)"
            projects.style.transform = "translateX(0)"
            contact.style.transform = "translateX(100%)"
            
            home.style.transitionDelay = "00s"
            projects.style.transitionDelay = "0.5s"
            contact.style.transitionDelay = "00s"
        }
        if(dataFilter == 'contact'){
            home.style.transform = "translateX(100%)"
            projects.style.transform = "translateX(100%)"
            contact.style.transform = "translateX(0)"
            
            home.style.transitionDelay = "00s"
            projects.style.transitionDelay = "00s"
            contact.style.transitionDelay = "0.5s"
        }

    })
 }

