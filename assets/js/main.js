const bodyElement = document.querySelector('body');
const loader = document.querySelector('.loader-wrapper');
window.onload = function () {
    if (loader.classList.contains('active')) {
        loader.classList.remove('active');
    }
    if (bodyElement.classList.contains('locked')) {
        bodyElement.classList.remove('locked');
    }
};
const linkHome = document.getElementById('link-home');
const home = document.querySelector('.home');
const linkAbout = document.getElementById('link-about');
const about = document.querySelector('.about');
const linkSkills = document.getElementById('link-skills');
const skills = document.querySelector('.skills');
const linkProjects = document.getElementById('link-projects');
const projects = document.querySelector('.projects');
linkHome.addEventListener('click', () => {
    document.querySelector('.home').scrollIntoView();
});
linkAbout.addEventListener('click', () => {
    about.scrollIntoView();
});
linkSkills.addEventListener('click', () => {
    document.querySelector('.skills').scrollIntoView();
});
linkProjects.addEventListener('click', () => {
    document.querySelector('.projects').scrollIntoView();
});
document.querySelector('.continue').addEventListener('click', () => {
    about.scrollIntoView();
});
const header = document.querySelector('header');
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    backToTop.classList.toggle('active', window.scrollY > 500);
});
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
const progressBar = document.querySelector('.progress-bar');
const links = document.querySelectorAll('.link');
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    let progressRatio = window.scrollY / (window.document.body.scrollHeight - window.innerHeight - 1);
    if (progressRatio > 1) {
        progressRatio = 1;
    } else if (progressRatio < 0) {
        progressRatio = 0;
    }
    progressBar.style.width = (progressRatio * 100) + '%';
    if ((home.offsetTop - window.scrollY) < 0) {
        links.forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        });
        linkHome.classList.add('selected');
    }
    if ((about.offsetTop - window.scrollY) < 80) {
        links.forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        });
        linkAbout.classList.add('selected');
    }
    if ((skills.offsetTop - window.scrollY) < 80) {
        links.forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        });
        linkSkills.classList.add('selected');
    }
    if ((projects.offsetTop - window.scrollY) < 80) {
        links.forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        });
        linkProjects.classList.add('selected');
    }
    reveals.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 30) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
});
var index = 1;
document.querySelectorAll('.project').forEach(element => {
    element.addEventListener('click', () => {
        if (!bodyElement.classList.contains('locked')) {
            bodyElement.classList.add('locked');
        }
        if (!document.getElementById('project-slide-' + element.dataset.id).classList.contains('active')) {
            document.getElementById('project-slide-' + element.dataset.id).classList.add('active');
        }
        document.querySelectorAll('.project-image-' + element.dataset.id).forEach(image => {
            if (image.classList.contains('active')) {
                image.classList.remove('active');
            }
        });
        document.querySelector('.project-image-' + element.dataset.id + '-1').classList.add('active');
        if (document.querySelector('.right-icon-' + element.dataset.id).classList.contains('disable')) {
            document.querySelector('.right-icon-' + element.dataset.id).classList.remove('disable');
        }
        if (!document.querySelector('.left-icon-' + element.dataset.id).classList.contains('disable')) {
            document.querySelector('.left-icon-' + element.dataset.id).classList.add('disable');
        }
        index = 1;
    });
});
document.querySelectorAll('.project-close').forEach(element => {
    element.addEventListener('click', () => {
        if (bodyElement.classList.contains('locked')) {
            bodyElement.classList.remove('locked');
        }
        if (document.getElementById('project-slide-' + element.dataset.id).classList.contains('active')) {
            document.getElementById('project-slide-' + element.dataset.id).classList.remove('active');
        }
    });
});
document.querySelectorAll('.right-icon').forEach(element => {
    element.addEventListener('click', () => {
        if (element.dataset.max >= index) {
            if (element.nextElementSibling.classList.contains('disable')) {
                element.nextElementSibling.classList.remove('disable')
            }
            let selectedImage = document.querySelector('.project-image-' + element.dataset.id + '-' + index);
            if (selectedImage.classList.contains('active')) {
                selectedImage.classList.remove('active');
                index++;
                document.querySelector('.project-image-' + element.dataset.id + '-' + index).classList.add('active');
            }
            if (element.dataset.max < index) {
                element.classList.add('disable');
            }
        }
    });
});
document.querySelectorAll('.left-icon').forEach(element => {
    element.addEventListener('click', () => {
        if (1 < index) {
            if (element.previousElementSibling.classList.contains('disable')) {
                element.previousElementSibling.classList.remove('disable')
            }
            let selectedImage = document.querySelector('.project-image-' + element.dataset.id + '-' + index);
            if (selectedImage.classList.contains('active')) {
                selectedImage.classList.remove('active');
                index--;
                document.querySelector('.project-image-' + element.dataset.id + '-' + index).classList.add('active');
            }
            if (1 >= index) {
                element.classList.add('disable');
            }
        }
    });
});
console.log('%cSemih Polat', 'font-size: 50px;font-weight: bold;color: #6466ec;text-shadow: 9px 9px 0 #6466ec32;');
console.log('%cFull Stack Web Developer', 'font-size: 25px;color: #6466ec;');
console.log('%ccontact => ' + '%cpolatsemih@protonmail.com', 'font-size: 20px;color: #aaaaaa;', 'font-size: 20px;color: #ffffff;');