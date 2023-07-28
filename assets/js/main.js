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

const header_title = document.querySelector('header .title');
const pagination = document.querySelector('.pagination');

const main = document.querySelector('main');
const home_section = document.querySelector('.home');
const projects_section = document.querySelector('.projects');

let is_home = true;
function go_projects() {
    allow = false;
    home_section.classList.remove('active');
    projects_section.classList.add('active');
    header_title.innerText = 'Projects';
    pagination.classList.add('active');
    is_home = false;
    setTimeout(() => {
        allow = true;
    }, 100);
}
function back_home() {
    allow = false;
    projects_section.classList.remove('active');
    home_section.classList.remove('removed');
    home_section.classList.add('active');
    header_title.innerText = 'SUP';
    pagination.classList.remove('active');
    is_home = true;
    setTimeout(() => {
        allow = true;
    }, 100);
}

// HOME WHEEL
main.addEventListener('wheel', (e) => {
    if (allow) {
        if (is_home) {
            if (e.deltaY > 0) {
                go_projects();
            }
        } else {
            let direction = '';
            if (e.deltaY > 0) {
                direction = 'down';
            } else {
                direction = 'up';
            }
            projects_action(direction);
        }
    }
});
// HOME SWIPE
var touch_start_x = 0;
var touch_end_x = 0;
var touch_start_y = 0;
var touch_end_y = 0;
function swipe_x() {
    if (touch_start_x - touch_end_x > 0) {
        projects_action('down');
    } else if (touch_start_x - touch_end_x < 0) {
        projects_action('up');
    }
}
function swipe_y() {
    if (touch_start_y - touch_end_y > 0) {
        go_projects();
    } else if (touch_start_y - touch_end_y < 0) {
        back_home();
    }
}
// MOBILE SWIPE
main.addEventListener('touchstart', (e) => {
    if (allow) {
        if (is_home) {
            touch_start_y = e.touches[0].clientY;
        } else {
            touch_start_x = e.touches[0].clientX;
        }
    }
});
main.addEventListener('touchend', (e) => {
    if (allow) {
        if (is_home) {
            touch_end_y = e.changedTouches[0].clientY;
            swipe_y();
        } else {
            touch_end_x = e.changedTouches[0].clientX;
            swipe_x();
        }
    }
});
// DESKTOP SWIPE
main.addEventListener('mousedown', (e) => {
    if (allow) {
        if (is_home) {
            touch_start_y = e.clientY;
        } else {
            touch_start_x = e.clientX;
        }
    }
});
main.addEventListener('mouseup', (e) => {
    if (allow) {
        if (is_home) {
            touch_end_y = e.clientY;
            swipe_y();
        } else {
            touch_end_x = e.clientX;
            swipe_x();
        }
    }
});

// PROJECTS PAGINATION
const projects = document.querySelectorAll('.projects .project');
for (let index_project = 0; index_project < projects.length; index_project++) {
    let page = document.createElement('div');
    page.classList.add('page');
    if (index_project == 0) {
        page.classList.add('active');
    }
    pagination.appendChild(page);
}
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
        } else if (index == 0) {
            back_home();
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
document.querySelectorAll('.project img').forEach(element => {
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

// KEY
document.addEventListener('keydown', (e) => {
    if (allow && !is_home) {
        if (e.key === 'ArrowRight') {
            projects_action('down');
        } else if (e.key === 'ArrowLeft') {
            projects_action('up');
        }
    }
});