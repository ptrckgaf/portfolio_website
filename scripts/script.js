let aboutMeButton = document.getElementById('about-me');
let myProjectsButton = document.getElementById('my-projects');
let contactButton = document.getElementById('contact');
let mainContent = document.getElementsByTagName('main')[0];

let aboutMePage = '<div class="welcome-page">\n' +
    '            <div class="welcome-text">\n' +
    '                <h1>Hello,</h1>\n' +
    '                <p>My name is Patrik Gáfrik. I am a computer science student at Brno University of Technology.\n' +
    '                    I am primarily interested in full-stack web development. I have experience with developing web applications\n' +
    '                    using React. I enjoy working in team and discussing optimal solutions for problems.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <img src="images/profile_photo.jpg" alt="profile_photo.jpg">\n' +
    '        </div>';




const navigateToAboutMe = () => {
    const isSelected = aboutMeButton.classList.contains("selected-nav-link");
    if (!isSelected) {
        aboutMeButton.classList.add("selected-nav-link");
        myProjectsButton.classList.remove("selected-nav-link");
        contactButton.classList.remove("selected-nav-link");
    }

    mainContent.innerHTML = aboutMePage;
}

const navigateToMyProjects = () => {
    const isSelected = myProjectsButton.classList.contains("selected-nav-link");
    if (!isSelected) {
        myProjectsButton.classList.add("selected-nav-link");
        aboutMeButton.classList.remove("selected-nav-link");
        contactButton.classList.remove("selected-nav-link");
    }
}

const navigateToContact = () => {
    const isSelected = contactButton.classList.contains("selected-nav-link");
    if (!isSelected) {
        contactButton.classList.add("selected-nav-link");
        aboutMeButton.classList.remove("selected-nav-link");
        myProjectsButton.classList.remove("selected-nav-link");
    }
}

aboutMeButton.onmouseover = function () {
    aboutMeButton.style.color = 'white';
    aboutMeButton.style.cursor = 'pointer';
}
aboutMeButton.onmouseout = function () {
    aboutMeButton.style.color = '#CCCCCC';
}
aboutMeButton.addEventListener('click', navigateToAboutMe);


myProjectsButton.onmouseover = function () {
    myProjectsButton.style.color = 'white';
    myProjectsButton.style.cursor = 'pointer';
}

myProjectsButton.onmouseout = function () {
    myProjectsButton.style.color = '#CCCCCC';
}

myProjectsButton.addEventListener('click', navigateToMyProjects);

contactButton.onmouseover = function () {
    contactButton.style.color = 'white';
    contactButton.style.cursor = 'pointer';
}

contactButton.onmouseout = function () {
    contactButton.style.color = '#CCCCCC';
}

contactButton.addEventListener('click', navigateToContact);