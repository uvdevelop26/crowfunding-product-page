const btnContinue = modalSelect.querySelectorAll('button[id|="continue"]')
const totalBackers = dataPledgeArea.querySelector('#total-backers');
const totalBacked = dataPledgeArea.querySelector('#total-backed');

const successModal = document.querySelector('#success-modal');
const menuSuccess = successModal.querySelector('#success-modal-menu');
const btnFinish = successModal.querySelector('#got-it');

const product = { pledge: 50000, backers: 1902 }



window.onload = showData;



function showData() {

    totalBackers.textContent = `${(product.backers)}`
    totalBacked.textContent = `$${(product.pledge).toLocaleString()}`

     const progress = progressBar.firstElementChild;
 
     let width = getProgressBarWidth()
 
     progress.style.width = width
 
}


function updateData(elem) {

    if (elem.value == 'reward-bamboo') {

        product.pledge = product.pledge + 25;
        product.backers = product.backers + 1


    } else if (elem.value == 'black-reward') {
        product.pledge = product.pledge + 75;
        product.backers = product.backers + 1
    } else if (elem.value == 'no-reward') {
        product.pledge = product.pledge + 10;
        product.backers = product.backers + 1
    }

    console.log(product)

    showData();

}

const getProgressBarWidth = () => {

    const progresWidth = (product.pledge * 100) / 100000

    let result = progresWidth.toFixed(1)

    return `${result}%`

}


btnContinue.forEach((item, i) => {

    item.addEventListener('click', () => {

        menuOptions.forEach((elem, j) => {

            if (i == j) {
                const input = elem.querySelector('input[type="radio"]')

                updateData(input)

                const menuSelect = modalSelect.querySelector('#menu-select');

                animationModalClose(modalSelect, menuSelect)

                setTimeout(() => {
                    animationModalOpen(successModal, menuSuccess)
                }, 500)

            }

        })

    })

});



btnFinish.addEventListener('click', () => {

    animationModalClose(successModal, menuSuccess)

});





