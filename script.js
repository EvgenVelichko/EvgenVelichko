let lastRequestTime = 0;
const requestInterval = 5000;

function makeRequest() {
  const currentTime = new Date().getTime();
  if (currentTime - lastRequestTime > requestInterval) {
    lastRequestTime = currentTime;
  } else {
    alert("Слишком много запросов. Пожалуйста, подождите.");
  }
}
const ipRequests = {};

function checkIp(ip) {
  const currentTime = new Date().getTime();
  if (!ipRequests[ip]) {
    ipRequests[ip] = [];
  }
  ipRequests[ip].push(currentTime);

  ipRequests[ip] = ipRequests[ip].filter(
    (time) => currentTime - time < requestInterval
  );

  if (ipRequests[ip].length > 5) {
    alert("Ваш IP заблокирован из-за подозрительной активности.");
    return false;
  }
  return true;
}

function makeRequest(ip) {
  if (checkIp(ip)) {
    console.log("Запрос выполнен");
  }
}
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  body.classList.toggle("lock-scroll");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
    body.classList.remove("lock-scroll");
  });
});
let currentProject = 0;

function showProject(index) {
    const projects = document.querySelectorAll('.project');
    const totalProjects = projects.length;

    if (index >= totalProjects) {
        currentProject = 0; 
    } else if (index < 0) {
        currentProject = totalProjects - 1; 
    } else {
        currentProject = index;
    }

    const slider = document.querySelector('.project-slider');
    const projectWidth = projects[0].offsetWidth; 

    slider.style.transform = `translateX(-${currentProject * projectWidth}px)`;

    
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
