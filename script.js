
function applyJobInfoJobs(index, numberOfJobs) {
    let i = index
    let cardLinks = document.querySelectorAll('#filterSideBar .card .js_cardLink')
    setTimeout(() => {
        cardLinks[i].click()
        let vacancyLink = document.querySelector('#vacancylistDetailContainer .card #VacancyHeader .js_btApplyVacancy')
        window.open(vacancyLink.href, '_blank')
        i++
        if(i < numberOfJobs) {
            applyJobInfoJobs(i, numberOfJobs)
        }
    }, 1200)
}

function infoJobs(index, numberOfJobs){
    applyJobInfoJobs(index, numberOfJobs)
}

infoJobs(0, 20)

function catho(index, numberOfJobs){ //Working
    applyJobCatho(index, numberOfJobs)
}
function applyJobCatho(index, numberOfJobs, selectLetter){
    let i = index
    let cardLinks = document.querySelectorAll('.Content-sc-6vzg5x-0 .sc-TOsTZ button')
    setTimeout(() => {
        cardLinks[i].click()
        let modal = document.querySelector('.Modal__ModalCard-sc-300qpr-0 .Content-sc-6vzg5x-0 form .hMGmVu')
        let ad = document.querySelector('#apply-modal-ok-button')
        if(selectLetter == true) {
            let selectBox = document.querySelector('.Modal__ModalCard-sc-300qpr-0 .Content-sc-6vzg5x-0 form .Dropdown__DropInput-sc-xoew8d-0')
            selectBox.click()
            let selectBoxItem = document.querySelector('.Modal__ModalCard-sc-300qpr-0 .Content-sc-6vzg5x-0 form .Dropdown__DropList-sc-xoew8d-3 span')
            selectBoxItem.click()
        }
        modal.click()
        ad.click()
        i++
        if(i < numberOfJobs) {
            applyJobCatho(i, numberOfJobs)
        }
    }, 1200)
}




