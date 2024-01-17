let aboutMeButton = document.getElementsByClassName('about-me-link')[0];
let myProjectsButton = document.getElementsByClassName('my-projects-link')[0];
let contactButton = document.getElementsByClassName('contact-link')[0];
let mainContent = document.getElementsByTagName('main')[0];
let enLanguageButton = document.getElementById('en-btn');
let skLanguageButton = document.getElementById('sk-btn');
let isEN = true;
let isSK = false;


let aboutMePage = '<div class="welcome-page">\n' +
    '            <div class="welcome-text">\n' +
    '                <h1>Hello,</h1>\n' +
    '                <p>My name is <b>Patrik Gáfrik</b>. I am a computer science student at Brno University of Technology.\n' +
    '                    I am primarily interested in full-stack web development. I have experience with developing web applications\n' +
    '                    using React. I enjoy working in team and discussing optimal solutions for problems.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <img src="images/profile_photo.jpg" alt="profile_photo.jpg">\n' +
    '        </div>';


let aboutMePageSK = '<div class="welcome-page">\n' +
    '            <div class="welcome-text">\n' +
    '                <h1>Ahoj,</h1>\n' +
    '                <p>Volám sa <b>Patrik Gáfrik</b>. Som študent informačných technológií na VUT v Brne. Zaujímam sa hlavne o full-stack web development. Mám skúsenosti s vytváraním ' +
    'webových aplikácií vo frameworku React. Rád pracujem v tíme a diskutujem o vhodných riešeniach problémov.</p>\n' +
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

let myProjectsPageSK = '<div class="my-projects">\n' +
    '                           <h1>Projekty na ktorých som pracoval:</h1>' +
    '                           <ul>' +
    '                             <li><a class="github-link" href="https://github.com/ptrckgaf/IFJ-22-project" target="_blank">IFJ-22-project</a></li>' +
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

    if (isSK) {
        mainContent.innerHTML = aboutMePageSK;
    }
    if (isEN) {
        mainContent.innerHTML = aboutMePage;
    }

}

const navigateToMyProjects = () => {
    const isSelected = myProjectsButton.classList.contains("selected-nav-link");
    if (!isSelected) {
        myProjectsButton.classList.add("selected-nav-link");
        aboutMeButton.classList.remove("selected-nav-link");
        contactButton.classList.remove("selected-nav-link");
    }

    if (isSK) {
        mainContent.innerHTML = myProjectsPageSK;
    }
    if (isEN) {
        mainContent.innerHTML = myProjectsPage;
    }


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

const changeLanguage = (lang) => {
    if (lang === 'sk') {
        aboutMeButton.innerHTML = 'O mne';
        myProjectsButton.innerHTML = 'Moje projekty';
        contactButton.innerHTML = 'Kontakt';
        if (aboutMeButton.classList.contains('selected-nav-link')) {
            mainContent.innerHTML = aboutMePageSK;
        }
        if (myProjectsButton.classList.contains('selected-nav-link')) {
            mainContent.innerHTML = myProjectsPageSK;
        }

        isSK = true;
        isEN = false;

    }
    if (lang === 'en') {
        aboutMeButton.innerHTML = 'About Me';
        myProjectsButton.innerHTML = 'My Projects';
        contactButton.innerHTML = 'Contact';
        if (aboutMeButton.classList.contains('selected-nav-link')) {
            mainContent.innerHTML = aboutMePage;
        }
        if (myProjectsButton.classList.contains('selected-nav-link')) {
            mainContent.innerHTML = myProjectsPage;
        }
        isSK = false;
        isEN = true;

    }

}
skLanguageButton.addEventListener('click', () => {
    skLanguageButton.classList.add('active');
    enLanguageButton.classList.remove('active');
});

enLanguageButton.addEventListener('click', () => {
    enLanguageButton.classList.add('active');
    skLanguageButton.classList.remove('active');
});
skLanguageButton.addEventListener('click', () => changeLanguage('sk'));
enLanguageButton.addEventListener('click', () => changeLanguage('en'));



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