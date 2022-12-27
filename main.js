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
const selectEl = document.querySelector('#select')
const option = document.querySelectorAll('option')

// Event Listener
calEl.addEventListener(
    'click',
    () => {
        if(billEl.value === ''){
            warningEl.style.display = 'block'
            billWarn.textContent = 'Bill Amount Cannot Be Blank'
        }else{
            warningEl.style.display = 'none'
            billWarn.textContent = ''
        }
        if(sharingBill.value === ''){
            warningEl.style.display = 'block'
            sharingWarn.textContent = 'Number Of Users Must Be Greater Than Zero'
        }else{
            warningEl.style.display = 'none'
            sharingWarn.textContent = ''
        }

        if(selectEl.value === option[0]){
            console.log(option[0])
            // warningEl.style.display = 'block'
            // serviceWarn.textContent = 'grow'
        }
    }
)