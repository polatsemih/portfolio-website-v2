const bodyTag = document.querySelector('body');
const loader = document.querySelector('.loader');
const header = document.querySelector('header');
window.onload = function () {
    if (loader.classList.contains('active')) {
        loader.classList.remove('active');
    }
    if (bodyTag.classList.contains('locked')) {
        bodyTag.classList.remove('locked');
    }
};
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    backToTop.classList.toggle('active', window.scrollY > 500);
});
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.menu-link');
links.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('section' + element.dataset.id).scrollIntoView();
        if (bodyTag.classList.contains('locked')) {
            bodyTag.classList.remove('locked');
        }
    });
});
const progressBar = document.querySelector('.progress-bar');
const sectionNumber = sections.length;
window.addEventListener('scroll', () => {
    sections.forEach(element => {
        if ((element.offsetTop - window.scrollY) < 80) {
            if (element.dataset.id <= sectionNumber) {
                links.forEach(element => {
                    if (element.classList.contains('selected')) {
                        element.classList.remove('selected');
                    }
                });
                document.getElementById('link' + element.dataset.id).classList.add('selected');
            }
        }
    });
    let progressRatio = window.scrollY / (window.document.body.scrollHeight - window.innerHeight - 1);
    if (progressRatio > 1) {
        progressRatio = 1;
    } else if (progressRatio < 0) {
        progressRatio = 0;
    }
    progressBar.style.width = (progressRatio * 100) + '%';
    document.querySelectorAll('.reveal').forEach(element => {
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
document.getElementById('browse').addEventListener('click', () => {
    document.getElementById('section2').scrollIntoView();
});
var index = 1;
document.querySelectorAll('.project').forEach(element => {
    element.addEventListener('click', () => {
        index = 1;
        if (!bodyTag.classList.contains('locked')) {
            bodyTag.classList.add('locked');
        }
        let projectSlider = document.getElementById('project-slider-' + element.dataset.id);
        if (!projectSlider.classList.contains('active')) {
            projectSlider.classList.add('active');
        }
        let projectImages = document.querySelectorAll('#project-slider-' + element.dataset.id + ' img');
        projectImages.forEach(image => {
            if (image.classList.contains('active')) {
                image.classList.remove('active');
            }
        });
        document.querySelector('#project-slider-' + element.dataset.id + ' .current-image-count').innerText = 1;
        document.querySelector('#project-slider-' + element.dataset.id + ' .total-image-count').innerText = projectImages.length;
        document.querySelector('#project-slider-' + element.dataset.id + ' .project-image-1').classList.add('active');
        let rightArrow = document.querySelector('#project-slider-' + element.dataset.id + ' .right-arrow');
        let leftArrow = document.querySelector('#project-slider-' + element.dataset.id + ' .left-arrow');
        if (rightArrow.classList.contains('disable')) {
            rightArrow.classList.remove('disable');
        }
        if (!leftArrow.classList.contains('disable')) {
            leftArrow.classList.add('disable');
        }
    });
});
document.querySelectorAll('.project-slider .close').forEach(element => {
    element.addEventListener('click', () => {
        if (bodyTag.classList.contains('locked')) {
            bodyTag.classList.remove('locked');
        }
        if (element.parentElement.parentElement.parentElement.classList.contains('active')) {
            element.parentElement.parentElement.parentElement.classList.remove('active');
        }
    });
});
document.querySelectorAll('.right-arrow').forEach(element => {
    element.addEventListener('click', () => {
        let totalImageCount = document.querySelectorAll('#project-slider-' + element.dataset.id + ' img').length;
        if (totalImageCount > index) {
            if (element.previousElementSibling.classList.contains('disable')) {
                element.previousElementSibling.classList.remove('disable')
            }
            let selectedImage = document.querySelector('#project-slider-' + element.dataset.id + ' .project-image-' + index);
            if (selectedImage.classList.contains('active')) {
                selectedImage.classList.remove('active');
                index++;
                document.querySelector('#project-slider-' + element.dataset.id + ' .project-image-' + index).classList.add('active');
                document.querySelector('#project-slider-' + element.dataset.id + ' .current-image-count').innerText = index;
            }
            if (totalImageCount <= index) {
                element.classList.add('disable');
            }
        }
    });
});
document.querySelectorAll('.left-arrow').forEach(element => {
    element.addEventListener('click', () => {
        if (1 < index) {
            if (element.nextElementSibling.classList.contains('disable')) {
                element.nextElementSibling.classList.remove('disable')
            }
            let selectedImage = document.querySelector('#project-slider-' + element.dataset.id + ' .project-image-' + index);
            if (selectedImage.classList.contains('active')) {
                selectedImage.classList.remove('active');
                index--;
                document.querySelector('#project-slider-' + element.dataset.id + ' .project-image-' + index).classList.add('active');
                document.querySelector('#project-slider-' + element.dataset.id + ' .current-image-count').innerText = index;
            }
            if (1 >= index) {
                element.classList.add('disable');
            }
        }
    });
});
document.querySelector('#section2 video').addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
console.log('%cSemih Polat', 'font-size: 50px;font-weight: bold;color: #6466ec;text-shadow: 9px 9px 0 #6466ec32;');
console.log('%cFull Stack Web Developer', 'font-size: 25px;color: #6466ec;');
console.log('%ccontact => ' + '%cpolatsemih@protonmail.com', 'font-size: 20px;color: #aaaaaa;', 'font-size: 20px;color: #fd4432;');
