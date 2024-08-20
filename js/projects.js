const projects = [
    {
        title: "Website Template",
        imageUrl: "imgs/projects/company.jpg",
        technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
        description: "A simple template for service providers. The purpose of this site was to explore the capabilities of Bootstrap as well as my proficiency with the framework.",
        liveDemoUrl: "https://site-template-2.vercel.app/",
        githubUrl: "https://github.com/ChristosPts/site-template-2"
    },
    {
        title: "Primo",
        imageUrl: "imgs/projects/primo.jpg",
        technologies: ["Sass", "HTML", "JavaScript"],
        description: "Primo is a CSS library inspired by Bootstrap. It was created to introduce myself to Sass and the process of building a CSS library.",
        liveDemoUrl: "https://primo-christospts.vercel.app/",
        githubUrl: "https://github.com/ChristosPts/primo"
    },
    {
        title: "Tetris-JS",
        imageUrl: "imgs/projects/Tetris.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "Experience the classic puzzle game with this Tetris clone. It was created to enhance my web development skills.",
        liveDemoUrl: "https://tetris-js-five.vercel.app/",
        githubUrl: "https://github.com/ChristosPts/Tetris-JS"
    },
    {
        title: "LiteTube",
        imageUrl: "imgs/projects/LiteTube.jpg",
        technologies: ["React.js", "MUI"],
        description: "Discover a simple YouTube clone, offering a familiar video-sharing interface. This project was created to further improve my knowledge of React.js and MUI.",
        liveDemoUrl: "https://litetube-tau.vercel.app/",
        githubUrl: "https://github.com/ChristosPts/React-YouTube"
    },
    {
        title: "MERN-Blog",
        imageUrl: "imgs/projects/MERN-blog.jpg",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
        description: "A MERN stack blog application enabling users to write, edit, and delete posts.",
        liveDemoUrl: "#",
        githubUrl: "https://github.com/ChristosPts/MERN-Blog"
    }
];



document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <div class="project-content">
                <img class="thumbnail" src="${project.imageUrl}" alt="${project.title}">
                <div class="project-details">
                    <h2>${project.title}</h2>
                    <div class="technologies">
                        ${project.technologies.map(tech => `<h4>${tech}</h4>`).join('')}
                    </div>
                    <p>${project.description}</p>
                </div>
                <div class="link-btn">
                    ${project.liveDemoUrl !== "#" ? 
                        `<a href="${project.liveDemoUrl}" target="_blank" class="btn btn-blue"><i class="bi bi-box-arrow-up-right"></i> Live Demo</a>` : 
                        `<a class="btn-gray" title="Coming Soon"><i class="bi bi-gear"></i> Live Demo</a>`}
                    <a href="${project.githubUrl}" target="_blank" class="btn"><i class="bi bi-github"></i> GitHub</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
});
