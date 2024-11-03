/** @format */

let currentProject = 1;

function showProject(index) {
    const projects = document.querySelectorAll('.project');
    const totalProjects = projects.length;

    if (index >= totalProjects) {
        currentProject = totalProjects - 1;
    } else if (index < 0) {
        currentProject = 0;
    } else {
        currentProject = index;
    }

    const slider = document.querySelector('.project-slider');
    const projectWidth = projects[0].offsetWidth;

    slider.style.transform = `translateX(${
        -currentProject * projectWidth + projectWidth
    }px)`;

    projects.forEach((project, i) => {
        project.classList.toggle('active', i === currentProject);
    });
}

function nextProject() {
    showProject(currentProject + 1);
}

function prevProject() {
    showProject(currentProject - 1);
}

showProject(currentProject);
