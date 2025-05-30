
    document.addEventListener('DOMContentLoaded', function () {
        const menuTrigger = document.querySelector('.menu-trigger');
        const innerMenu = document.querySelector('.inner-menu');

        menuTrigger.addEventListener('click', function () {
            innerMenu.classList.toggle('show-menu');
        });
    });

