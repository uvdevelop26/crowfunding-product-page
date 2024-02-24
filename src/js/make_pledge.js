const modalPledge = document.querySelector('#modal-select');
const menuModal = modalPledge.querySelector('#menu-select');
const cards = menuModal.querySelectorAll('section')

const btnSelectPrice = menuModal.querySelectorAll('button[id|="make"]')
const btnContinue = menuModal.querySelectorAll('button[id|="continue"]')

const product = { pledge: 50000, backers: 1902 }

const totalBackers = dataPledgeArea.querySelector('#total-backers');
const totalBacked = dataPledgeArea.querySelector('#total-backed');

const successModal = document.querySelector('#success-modal');

const btnFinish = successModal.querySelector('#got-it');

window.onload = showData;


/* ***************** show data **************** */

function showData() {

    totalBackers.textContent = `${(product.backers)}`
    totalBacked.textContent = `$${(product.pledge).toLocaleString()}`

    const progress = progressBar.firstElementChild;

    let width = updateProgressBar()

    progress.style.width = width

}

/* ************* update data ******************** */

function updateData(elem) {

    if (elem.value == 'reward-bamboo') {

        product.pledge = product.pledge + 25;
        product.backers = product.backers + 1


    } else if (elem.value == 'black-reward') {
        product.pledge = product.pledge + 75;
        product.backers = product.backers + 1
    }

    showData();

    modalMenuSelectOpen.classList.add('hidden')

    setTimeout(() => {
        successModal.classList.remove('hidden')
    }, 500)

}

btnFinish.addEventListener('click', () => {
    successModal.classList.add('hidden')
});

const updateProgressBar = () => {

    const progresWidth = (product.pledge * 100) / 100000

    let result = progresWidth.toFixed(1)

    return `${result}%`

}



//******************************* */

const newCards = Array.from(cards).filter((card) => {
    return card.id !== 'select-no-reward'
});

//
btnContinue.forEach((item, i) => {

    item.addEventListener('click', () => {

        newCards.forEach((elem, j) => {

            if (i == j) {
                const input = elem.querySelector('input[type="radio"]')

                updateData(input)

            }

        })

    })

});




