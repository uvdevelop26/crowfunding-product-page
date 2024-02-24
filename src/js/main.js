const mobileMenuOpen = document.querySelector('#mobile-menu-open');
const modalMenuMobile = document.querySelector('#menu-modal');
const mobileMenuClose = document.querySelector('#close-menu-mobile');

const header = document.querySelector('#header-card');
const buttonMenuOpen = header.querySelector('#open-modal-select');
const markFavorite = header.querySelector('#mark-favorite');

const dataPledgeArea = document.querySelector('#data-pledge');
const progressBar = dataPledgeArea.querySelector('#progress-bar');

const modalMenuSelectOpen = document.querySelector('#modal-select');
const menuSelect = modalMenuSelectOpen.querySelector('#menu-select');
const closeMenuSelect = modalMenuSelectOpen.querySelector('#close-modal-select');

const options = menuSelect.querySelectorAll('input[type="radio"]');

const dataOptionsArea = document.querySelector('#data-options');
const btnOptions = dataOptionsArea.querySelectorAll('button[id|="select-reward"]');







/* *********** Open and close mobile menu ************ */

mobileMenuOpen.addEventListener('click', () => {
    modalMenuMobile.classList.remove('hidden');

    mobileMenuOpen.classList.add('hidden');

});

mobileMenuClose.addEventListener('click', () => {

    mobileMenuOpen.classList.remove('hidden');

    modalMenuMobile.classList.add('hidden');
});

/* *********** Open and close menu select modal ************ */

buttonMenuOpen.addEventListener('click', () => {

    modalMenuSelectOpen.classList.remove('hidden');
    
    const inputNoReward = menuSelect.querySelector('#no-reward');

    inputNoReward.checked = 'true';

});

closeMenuSelect.addEventListener('click', () => {

    const cards = menuSelect.querySelectorAll('section');

    cards.forEach((card, item) => {

        card.classList.remove('border-moderateCyan', 'border-2')

        const footer = card.querySelector('div[id*="footer"]')

        if (footer !== null) {

            footer.classList.add('hidden')
        }
    });

    modalMenuSelectOpen.classList.add('hidden');

});


btnOptions.forEach((item, i) => {

    item.addEventListener('click', () => {

        modalMenuSelectOpen.classList.remove('hidden');

        const cards = menuSelect.querySelectorAll('section + section');

        cards.forEach((card, j) => {

            if (i == j) {
                const inputRadio = card.querySelector('input[type="radio"]');

                inputRadio.checked = 'true';

                card.classList.add('border-moderateCyan', 'border-2')

                const footer = card.querySelector('div[id*="footer"]')

                footer.classList.remove('hidden')

            }



        })



    });

})

/* *********** bookmarked **************** */

markFavorite.addEventListener('click', () => {

    const circleSVG = markFavorite.querySelector('circle');
    const pathSVG = markFavorite.querySelector('path')
    const span = markFavorite.querySelector('span');
    const progress = progressBar.firstElementChild;

    const value = circleSVG.attributes.fill.nodeValue

    if (value == '#2F2F2F') {

        circleSVG.attributes.fill.nodeValue = 'hsl(176, 72%, 28%)'
        circleSVG.classList.remove('hover:fill-darkGray')
        pathSVG.attributes.fill.nodeValue = '#ffff'

        span.classList.remove('lg:bg-gray-100');
        span.classList.add('lg:bg-cyan-100')
        span.classList.remove('lg:text-darkGray')
        span.classList.add('lg:text-darkCyan')

        progress.classList.remove('bg-darkCyan');
        progress.classList.add('bg-moderateCyan');


    } else if (value == 'hsl(176, 72%, 28%)') {

        circleSVG.attributes.fill.nodeValue = '#2F2F2F'
        circleSVG.classList.add('hover:fill-darkGray')
        pathSVG.attributes.fill.nodeValue = '#B1B1B1'

        span.classList.add('lg:bg-gray-100');
        span.classList.remove('lg:bg-cyan-100')
        span.classList.remove('lg:text-darkCyan')
        span.classList.add('lg:text-darkGray')

        progress.classList.add('bg-darkCyan');
        progress.classList.remove('bg-moderateCyan');
    }


});

//************ selected card ************* */


options.forEach((option, i) => {

    option.addEventListener('change', () => {

        const cards = menuSelect.querySelectorAll('section');



        if (option.checked && option.value == 'no-reward') {

            cards.forEach((card, j) => {
                if (i == j) {
                    card.classList.add('border-moderateCyan', 'border-2');

                } else {
                    card.classList.remove('border-moderateCyan', 'border-2')

                    const footer = card.querySelector('div[id*="footer"]')

                    if (footer !== null) {

                        footer.classList.add('hidden')
                    }
                }

            });

        } else if (option.checked && option.value == 'reward-bamboo') {
            cards.forEach((card, j) => {

                if (i == j) {
                    card.classList.add('border-moderateCyan', 'border-2')

                    const footer = card.querySelector('div[id*="footer"]')

                    footer.classList.remove('hidden')

                } else {
                    card.classList.remove('border-moderateCyan', 'border-2')

                    const footer = card.querySelector('div[id*="footer"]')

                    if (footer !== null) {

                        footer.classList.add('hidden')
                    }

                }
            });
        } else if (option.checked && option.value == 'black-reward') {
            cards.forEach((card, j) => {
                if (i == j) {
                    card.classList.add('border-moderateCyan', 'border-2')

                    const footer = card.querySelector('div[id*="footer"]')

                    footer.classList.remove('hidden')

                } else {
                    card.classList.remove('border-moderateCyan', 'border-2')

                    const footer = card.querySelector('div[id*="footer"]')

                    if (footer !== null) {

                        footer.classList.add('hidden')
                    }
                }
            });
        }

    })

});

