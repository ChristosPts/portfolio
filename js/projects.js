const projectsArray = [
    {
        projectImg: "/portfolio/img/img1.jpg",
        projectName: "dWrap",

        projectDesc: "Website for finding images and wallpapers ",
        displayImgs: ["/portfolio/img/projectimgs/dwrap1.jpg","/portfolio/img/projectimgs/dwrap2.jpg","/portfolio/img/projectimgs/dwrap3.jpg","/portfolio/img/projectimgs/dwrap4.jpg","/portfolio/img/projectimgs/dwrap5.jpg"],

        link1:"https://github.com/ChristosPts/dWrap",
        link2:"https://github.com/ChristosPts/dWrap",
    },
    {
        projectImg: "/portfolio/img/img2.jpg",
        projectName: "Mojito",
        
        projectDesc: "A search engine built with Google's Custom Search API ",
        displayImgs: ["/portfolio/img/projectimgs/mojito1.jpg","/portfolio/img/projectimgs/mojito2.jpg","/portfolio/img/projectimgs/mojito3.jpg","/portfolio/img/projectimgs/mojito4.jpg"],

        link1:"https://mojito-five.vercel.app/",
        link2:"https://github.com/ChristosPts/Mojito-Search-Engine",
    },
    {
        projectImg: "/portfolio/img/img3.jpg",
        projectName: "Recipe Repository",
        
        projectDesc: "A simple recipe site",
        displayImgs:  ["/portfolio/img/projectimgs/rr1.jpg","/portfolio/img/projectimgs/rr2.jpg","/portfolio/img/projectimgs/rr3.jpg","/portfolio/img/projectimgs/rr4.jpg"],

        link1:"https://recipe-repository-five.vercel.app/",
        link2:"https://github.com/ChristosPts/Recipe-Repository",
    }
]

const projectsItems = document.getElementById('projects-items')
const popupContainer = document.getElementById('popupContainer')

projectsArray.forEach(function(project,i){
    /*Create main div*/
    var projects = document.createElement('div');
    projects.dataset.name = "item" + i;
    projects.className = "projects"

    var projectItem =  document.createElement('div');
    projectItem.className = "project-item"

    var projectImg = document.createElement('img');
    projectImg.src =  project.projectImg;

    var projectNameDiv = document.createElement('div');
    projectNameDiv.className = "projectNameDiv";

    var nameDivHeader = document.createElement("h2");
    nameDivHeader.innerText = project.projectName;
    var nameDivHeaderI = document.createElement("i");
    nameDivHeaderI.className ="bi bi-box-arrow-in-up-right"
    nameDivHeader.appendChild(nameDivHeaderI);


    projectsItems.appendChild(projects);
    projects.appendChild(projectItem);
    projectItem.appendChild(projectImg);
    projectItem.appendChild(projectNameDiv);
    projectNameDiv.appendChild(nameDivHeader);
    projectNameDiv
    
    /*Create popups*/
    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.dataset.target = "item" + i;
    popup.className = 'popup'
    popupContainer.appendChild(popup);

    var popupItems = document.createElement('div');
    popupItems.id = 'popup-items'
    popupItems.className = 'popup-items'

    var closeBtn = document.createElement('span')
    closeBtn.className = "closeBtn"
    closeBtn.innerHTML = '<i class="bi bi-x"></i>'
    popupItems.appendChild(closeBtn)
    popup.appendChild(popupItems)
    
    var projectName = document.createElement('h1');
    var projectNameLink = document.createElement('a');
    projectNameLink.innerText = project.projectName;
    projectNameLink.href = project.link1;
    projectNameLink.target = "_blank"
    projectName.appendChild(projectNameLink);
    popupItems.appendChild(projectName);

    var swiper = document.createElement('div');
    swiper.className = 'swiper mySwiper'
     popupItems.appendChild(swiper);

    var swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper'
    swiper.appendChild(swiperWrapper)

    for(let j = 0; j<projectsArray[i].displayImgs.length; j++){
        var swiperSlide = document.createElement('div');
        swiperSlide.className = "swiper-slide"

        var images = document.createElement('img');
        images.src = projectsArray[i].displayImgs[j]

        swiperSlide.appendChild(images); 
        swiperWrapper.appendChild(swiperSlide); 
    }  

    var swiperPagination = document.createElement('div');
    swiperPagination.className = "swiper-pagination"

    swiper.appendChild(swiperPagination); 
  


    var projectDesc = document.createElement('p');
    projectDesc.innerText = project.projectDesc;
    var projectDescLinkDiv = document.createElement('div');
    var projectDescLink = document.createElement('a');
    projectDescLink.innerText = "Learn more";
    projectDescLink.target = "_blank"
    projectDescLinkDiv.appendChild(projectDescLink);

    projectDescLink.href = project.link2;
    projectDesc.appendChild(projectDescLinkDiv)
    popupItems.appendChild(projectDesc);

})
