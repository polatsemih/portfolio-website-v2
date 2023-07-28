// const loader = document.querySelector('.loader');
// window.onload = function () {
//     if (loader.classList.contains('active')) {
//         loader.classList.remove('active');
//     }
// };
console.log('%cSemih Polat', 'font-size: 50px;font-weight: bold;color: #6466ec;text-shadow: 9px 9px 0 #6466ec32;');
console.log('%cFull Stack Web Developer', 'font-size: 25px;color: #6466ec;');
console.log('%ccontact => ' + '%cpolatsemih@protonmail.com', 'font-size: 20px;color: #aaaaaa;', 'font-size: 20px;color: #fd4432;');

let allow = true;

const pagination_mobile = document.querySelector('.pagination_mobile');
const pagination_desktop = document.querySelector('.pagination_desktop');

const main = document.querySelector('main');
const projects_section = document.querySelector('.project_details');

// WHEEL
main.addEventListener('wheel', (e) => {
    if (allow) {
        let direction = '';
        if (e.deltaY > 0) {
            direction = 'down';
        } else {
            direction = 'up';
        }
        projects_action(direction);
    }
});
// SWIPE
var touch_start_x = 0;
var touch_end_x = 0;
var touch_start_y = 0;
function swipe_x() {
    if (touch_start_x - touch_end_x > 0) {
        projects_action('down');
    } else if (touch_start_x - touch_end_x < 0) {
        projects_action('up');
    }
}
// MOBILE SWIPE
main.addEventListener('touchstart', (e) => {
    if (allow) {
        touch_start_x = e.touches[0].clientX;
    }
});
main.addEventListener('touchend', (e) => {
    if (allow) {
        touch_end_x = e.changedTouches[0].clientX;
        swipe_x();
    }
});
// DESKTOP SWIPE
main.addEventListener('mousedown', (e) => {
    if (allow) {
        touch_start_x = e.clientX;
    }
});
main.addEventListener('mouseup', (e) => {
    if (allow) {
        touch_end_x = e.clientX;
        swipe_x();
    }
});

// PROJECTS PAGINATION
const projects = document.querySelectorAll('.project_details .details_wrapper');
for (let index_project = 0; index_project < projects.length; index_project++) {
    let page = document.createElement('div');
    page.classList.add('page');
    if (index_project == 0) {
        page.classList.add('active');
    }
    pagination_desktop.appendChild(page);
}
pagination_mobile.innerText = '1/' + projects.length;
// PROJECTS
const pages = document.querySelectorAll('.page');
var index = 0;
function project_slider() {
    allow = false;
    projects.forEach((item, index_item) => {
        item.style.transform = 'translateX(calc(-' + index * 100 + '% - ' + index * 5 + 'vw))';
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
        if (pages[index_item].classList.contains('active')) {
            pages[index_item].classList.remove('active');
        }
    });
    projects[index].classList.add('active');
    pages[index].classList.add('active');
    pagination_mobile.innerText = (index + 1) + '/' + projects.length;
    setTimeout(() => {
        allow = true;
    }, 100);
}
function projects_action(direction) {
    let useable = false;
    if (direction == 'down') {
        if (index < (projects.length - 1)) {
            index++;
            useable = true;
        }
    } else {
        if (index > 0) {
            index--;
            useable = true;
        }
    }
    if (useable) {
        project_slider();
    }
}
pages.forEach((page, index_page) => {
    page.addEventListener('click', () => {
        if (allow) {
            index = index_page;
            project_slider();
        }
    });
});
// PROJECTS PREVENT IMAGE SWIPE
document.querySelectorAll('.details_wrapper img').forEach(element => {
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

// KEY
document.addEventListener('keydown', (e) => {
    if (allow) {
        if (e.key === 'ArrowRight') {
            projects_action('down');
        } else if (e.key === 'ArrowLeft') {
            projects_action('up');
        }
    } else {
        if (e.key === 'Escape') {
            details_wrappers.forEach(details_wrapper => {
                if (details_wrapper.classList.contains('zoom_in')) {
                    details_wrapper.classList.remove('transition');
                    details_wrapper.classList.remove('zoom_in');
                    details_wrapper.classList.add('details_wrapper');
                    setTimeout(() => {
                        details_wrapper.classList.add('transition');
                    }, 1);
                    allow = true;
                }
            });

        }
    }
});

const details_wrappers = document.querySelectorAll('.project_details .details_wrapper');
details_wrappers.forEach(details_wrapper => {
    details_wrapper.addEventListener('click', () => {
        if (details_wrapper.classList.contains('zoom_in')) {
            details_wrapper.classList.remove('transition');
            details_wrapper.classList.remove('zoom_in');
            details_wrapper.classList.add('details_wrapper');
            setTimeout(() => {
                details_wrapper.classList.add('transition');
            }, 1);
            allow = true;
        } else {
            details_wrapper.classList.remove('details_wrapper');
            details_wrapper.classList.add('zoom_in');
            allow = false;
        }
    });
});



// const loader = document.querySelector('.loader');
// var textttt = '';
// for (let i = 1; i < 70; i++) {
//     textttt += '<div class="details_wrapper transition active"><div class="image_wrapper"><i class="fa-solid fa-xmark"></i><img src="assets/images/e-commerce-v1/' + i + '.png" alt="E-commerce Website ' + i + '"></div></div>';
// }
// loader.innerHTML = textttt;