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

let myProjectsPage = '<div class="my-projects">\n' +
    '                           <h1>Projects that I have done:</h1>' +
    '                           <ul>' +
    '                             <li><a href="https://github.com/ptrckgaf/IFJ-22-project" target="_blank">IFJ-22-project</a></li>' +
    '                             <li><a href="https://github.com/ptrckgaf/IIS-22-project" target="_blank">IIS-22-project</a></li>' +
    '                             <li><a href="https://github.com/ptrckgaf/IPP-23-project" target="_blank">IPP-23-project</a></li>' +
    '                          </ul>' +
    '                        </div>';

let contactPage = '<div class="contact-info">\n' +
    '                       <ul>' +
    '                         <li>' +
    '                            <a href="https://www.linkedin.com/in/patrik-g%C3%A1frik-71206823b/" target="_blank"><img src="images/LI-In-Bug.png" alt="linkedin"></a>' +
    '                         </li>' +
    '                         <li>' +
    '                            <a href="https://github.com/ptrckgaf" target="_blank"><img src="images/github-mark-white.png" alt="github"></a>' +
    '                         </li>' +
    '                         <li>' +
    '                            <a href="mailto:gafrik.patrik@gmail.com" target="_blank"><img src="images/Gmail_Logo_512px.png" alt="gmail"></a>' +
    '                         </li>' +
    '                       </ul>';



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

    mainContent.innerHTML = myProjectsPage;
}

const navigateToContact = () => {
    const isSelected = contactButton.classList.contains("selected-nav-link");
    if (!isSelected) {
        contactButton.classList.add("selected-nav-link");
        aboutMeButton.classList.remove("selected-nav-link");
        myProjectsButton.classList.remove("selected-nav-link");
    }

    mainContent.innerHTML = contactPage;
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