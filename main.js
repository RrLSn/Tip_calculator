// Selectors
const warningEl = document.querySelector('.warn')

const billEl = document.querySelector('#bill')
const sharingBill = document.querySelector('#bill-sharing')
const selectEl = document.querySelector('#select')
const calEl = document.querySelector('#cal')

const billWarn = document.querySelector('.bill-warn')
const sharingWarn = document.querySelector('.sharing-warn')
const serviceWarn = document.querySelector('.service-warn')

// const option = document.querySelectorAll('option')

const answer = document.querySelector('.answer')
const tipAmnt = document.querySelector('.tip-Amnt')
const billAmnt = document.querySelector('.bill-Amnt')
const owesEl = document.querySelector('.owes')

warningEl.style.lineHeight = '1.7rem'


// Event Listener
calEl.addEventListener(
    'click',
    () => {
        if(billEl.value === ''){
            warningEl.style.display = 'block'
            billWarn.textContent = 'Bill Amount Cannot Be Blank'
        }else {
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
        if (selectEl.value === "Choose"){
            warningEl.style.display = "block";
            serviceWarn.textContent = "You Must Select A Service";
        }else{
            warningEl.style.display = 'none'
            serviceWarn.textContent = ''
        }
        if(selectEl.value === "Great"){
            answer.style.display = 'block'
            let grBill = 0.2 * billEl.value
            let total = grBill + parseInt(billEl.value)
            let owes = total / parseInt(sharingBill.value)
            tipAmnt.textContent = `Tip Amount $${grBill}.00`
            billAmnt.textContent = `Total Amount $${total}.00`
            owesEl.textContent = `Each Person Owes $${owes}.00`
        }
        else if(selectEl.value === "Good"){
            answer.style.display = 'block'
            let gBill = 0.1 * billEl.value
            let total = gBill + parseInt(billEl.value)
            let owes2 = total / parseInt(sharingBill.value)
            tipAmnt.textContent = `Tip Amount $${gBill}.00`
            billAmnt.textContent = `Total Amount $${total}.00`
            owesEl.textContent = `Each Person Owes $${owes2}.00`
        }
        else if(selectEl.value === 'Bad'){
            answer.style.display = 'block'
            let bBill = 0.02 * billEl.value
            let total = bBill + parseInt(billEl.value)
            let owes3 = total / parseInt(sharingBill.value)
            tipAmnt.textContent = `Tip Amount $${bBill}.00`
            billAmnt.textContent = `Total Amount $${total}.00`
            owesEl.textContent = `Each Person Owes $${owes3}.00`
        }
    }
)
