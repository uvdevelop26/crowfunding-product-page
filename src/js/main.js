const heroSectionArea = document.querySelector('#hero-section');
const btnOpenNav = heroSectionArea.querySelector('#mobile-menu-open');
const btnCloseNav = heroSectionArea.querySelector('#close-menu-mobile');


const headerArea = document.querySelector('#header-card');
const btnOpenSelect = headerArea.querySelector('#open-modal-select');
const btnMarkFavorite = headerArea.querySelector('#mark-favorite');

const modalSelect = document.querySelector('#modal-select');
const btnCloseSelect = modalSelect.querySelector('#close-modal-select');

const dataOptionsArea = document.querySelector('#data-options');
const btnSelectWithRegards = dataOptionsArea.querySelectorAll('button[id|="select-reward"]')

const menuOptions = modalSelect.querySelectorAll('section')
const inputRadios = modalSelect.querySelectorAll('input[type="radio"]')

const dataPledgeArea = document.querySelector('#data-pledge');
const progressBar = dataPledgeArea.querySelector('#progress-bar');



// functions

function animationModalOpen(modal, menu) {

    modal.classList.remove('hidden')
    menu.classList.remove('hidden')

    setTimeout(() => {

        modal.classList.add('bg-opacity-40')
        modal.classList.remove('bg-opacity-0')

        menu.classList.add('scale-100')
        menu.classList.remove('scale-0')

    }, 500)

}

function animationModalClose(modal, menu) {

    setTimeout(() => {

        menu.classList.add('scale-0')
        modal.classList.add('bg-opacity-0')
        modal.classList.remove('bg-opacity-40')

    }, 500)

    modal.classList.add('hidden')
    menu.classList.add('hidden')

}


function showSelectedMode(menu, footer) {

    const inputRadio = menu.querySelector('input[type="radio"]');

    menu.classList.add('border-moderateCyan')

    inputRadio.checked = 'true'

    setTimeout(() => {

        footer.classList.remove('hidden')

    }, 500)
}

function hiddeSelectedMode() {

    menuOptions.forEach((card, i) => {

        card.classList.remove('border-moderateCyan')

        const footer = card.querySelector('div[id*="footer"]')
        footer.classList.add('hidden')
    })


}

function setScrollHeight(card) {

    const position = card.offsetTop;

    modalSelect.scrollTo({
        top: position,
        behavior: 'smooth'
    })

}




//open and close modal menu nav
btnOpenNav.addEventListener('click', (e) => {

    const modal = heroSectionArea.querySelector('#menu-modal');

    const menu = modal.querySelector('#navlist')

    animationModalOpen(modal, menu)

    btnOpenNav.classList.add('hidden');


});

btnCloseNav.addEventListener('click', (e) => {

    const modal = heroSectionArea.querySelector('#menu-modal');

    const menu = modal.querySelector('#navlist')

    btnOpenNav.classList.remove('hidden');

    animationModalClose(modal, menu)

    hiddeSelectedMode();

   

});

//open and close pledge with no reward
btnOpenSelect.addEventListener('click', () => {

    const menuSelect = modalSelect.querySelector('#menu-select');

    animationModalOpen(modalSelect, menuSelect)

    menuOptions.forEach((menu, i) => {
        if (menu.id == 'select-no-reward') {

            const footer = menu.querySelector('#pledge-no-reward-footer');

            showSelectedMode(menu, footer)

            setScrollHeight(menu)
        }
    })

});

btnCloseSelect.addEventListener('click', () => {

    const menuSelect = modalSelect.querySelector('#menu-select');

    animationModalClose(modalSelect, menuSelect)

    hiddeSelectedMode()

});

//open and close menu with rewards

btnSelectWithRegards.forEach((btn, i) => {

    btn.addEventListener('click', (e) => {

        const menuSelect = modalSelect.querySelector('#menu-select');

        animationModalOpen(modalSelect, menuSelect)

        const newCards = Array.from(menuOptions).filter((option) => option.id !== 'select-no-reward')

        newCards.forEach((card, j) => {
            if (i == j) {

                const footer = card.querySelector('div[id*="footer"]')

                showSelectedMode(card, footer)

                setScrollHeight(card)

            }
        })

    });

});

//hande input event to show and hidde selected mode


inputRadios.forEach((radio, i) => {

    radio.addEventListener('change', () => {

        menuOptions.forEach((card, j) => {

            const footer = card.querySelector('div[id*="footer"]')

            if (i == j) {

                showSelectedMode(card, footer)

            } else {

                hiddeSelectedMode()

            }

        })

    })

});





btnMarkFavorite.addEventListener('click', () => {

    const circleSVG = btnMarkFavorite.querySelector('circle');
    const pathSVG = btnMarkFavorite.querySelector('path')
    const span = btnMarkFavorite.querySelector('span');
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

