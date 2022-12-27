// Selectors
const warningEl = document.querySelector('.warn')
const billEl = document.querySelector('#bill')
const sharingBill = document.querySelector('#bill-sharing')
const billWarn = document.querySelector('.bill-warn')
const sharingWarn = document.querySelector('.sharing-warn')
const serviceWarn = document.querySelector('.service-warn')
const tipAmnt = document.querySelector('.tip-Amnt')
const billAmnt = document.querySelector('.bill-Amnt')
const owesEl = document.querySelector('.owes')
const calEl = document.querySelector('#cal')

// Event Listener
calEl.addEventListener(
    'click',
    () => {
        if(billEl.value === ''){
            warningEl.style.display = 'block'
            billWarn.textContent = 'Bill Amount Cannot Be Blank'
        }else{
            billWarn.textContent = ''
            warningEl.style.display = 'none'
        }
        if(sharingBill.value === ''){
            sharingWarn.textContent = 'Number Of Users Must Be Greater Than Zero'
        }else{
            sharingWarn.textContent = ''
            warningEl.style.display = 'none'
        }
    }
)