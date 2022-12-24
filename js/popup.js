let getpopup = document.querySelectorAll('#popup'); 
 
document.querySelectorAll('.projects').forEach(image => {
    
    image.onclick = () => {
        getpopup.forEach(view =>{ 
            let dataName = image.getAttribute('data-name');
           
            let target = view.getAttribute('data-target')
            document.querySelector("body").style.overflow = 'hidden';

          

            if(dataName == target){           
                view.style.animation = "intro 1s";
                view.style.display = 'flex'; 
           
            }
        })
    }
}) 
getpopup.forEach(close =>{
    close.querySelector('.popup-items span').onclick = () =>{
       close.style.animation = "outro 1s";
       setTimeout(() => { close.style.display = 'none'; }, 100);
       
    };    
});

let getpopupbg = document.querySelectorAll('.popup'); 


getpopup.forEach(close =>{
    close.onclick = () =>{
        if(event.target.id == "popup"){
            close.style.animation = "outro 1s";
            setTimeout(() => { close.style.display = 'none'; }, 100);
        }
    };
});