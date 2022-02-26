//tee
const total = document.querySelector("#totalvalue")

//inputs and updates
const balanceE = document.querySelector("#balance")
const listInputs = document.querySelector("#listInputs")

// console.log(balanceE.innerHTML)

//list for show and hide data
const listThree = document.querySelector("#three")
const listSix = document.querySelector("#six")
const listTwelve = document.querySelector("#twelve")

//list for show entry
const threeEntry = document.querySelector("#three .listThree")
const sixEntry = document.querySelector("#six .listSix")
const twelveEntry = document.querySelector("#twelve .listTwelve")

//buttons
const btnThree = document.querySelector("#btnThree")
const btnSix = document.querySelector("#btnSix")
const btnTwelve = document.querySelector("#btnTwelve")

//inputs
const inputThree = document.querySelector("#inputThree")
const inputSix = document.querySelector("#inputSix")
const inputTwelve = document.querySelector("#inputTwelve")


//toggle
const tab1 = document.querySelector('.tab1')
const tab2 = document.querySelector('.tab2')
const tab3 = document.querySelector('.tab3')

//show hide, active in active function
const hide = (elements) => {
    elements.forEach(element => {
        element.classList.add('hide')
    })
}

const show = (element) => {
    element.classList.remove('hide')
}

const active = (element) => {
    element.classList.add('active')
}

const inActive = (elements) => {
    elements.forEach(element => {
        element.classList.remove('active')
    })
}

tab1.addEventListener('click', () => {
    show(listThree)
    hide([listSix, listTwelve])
    active(tab1)
    inActive([tab2, tab3])
})

tab2.addEventListener('click', () => {
    show(listSix)
    hide([listThree, listTwelve])
    active(tab2)
    inActive([tab1, tab3])
})

tab3.addEventListener('click', () => {
    show(listTwelve)
    hide([listThree, listSix])
    active(tab3)
    inActive([tab1, tab2])
})

//save payment to data object
const clearInput = () => {
    inputThree.value = ""
    inputSix.value = ""
    inputTwelve.value = ""
}

let ENTRY_LIST = []



btnThree.addEventListener('click', () => {
    if(inputThree.value < 2900000) return;

    let pay3 = {
        type : "pay3",
        amount : parseInt(inputThree.value)
    }
    ENTRY_LIST.push(pay3)
    clearInput()
    updateUi()
})

btnSix.addEventListener('click', () => {
    if(inputSix.value < 1450000) return

    let pay6 = {
        type : "pay6",
        amount : parseInt(inputSix.value)
    }

    ENTRY_LIST.push(pay6)
    clearInput()
    updateUi()
})

btnTwelve.addEventListener('click', () => {
    if(inputTwelve.value < 725000 ) return

    let pay12 = {
        type : "pay12",
        amount : parseInt(inputTwelve.value),
    }

    ENTRY_LIST.push(pay12)
    clearInput()
    updateUi()
})



//create update ui fucntion
const updateUi = () => {
 let balance = 8700000
 paid3 = calculateTotal("pay3", ENTRY_LIST);
 paid6 = calculateTotal("pay6", ENTRY_LIST);
 paid12 = calculateTotal("pay12", ENTRY_LIST);
 balance =  Math.abs(balance - paid3) 
 balance =  Math.abs(balance - paid6) 
 balance =  Math.abs(balance - paid12) 

let currency = "RP"

 //update balance 
 balanceE.innerHTML = `<small>${currency}</small> ${balance}`
 total.innerHTML = ` Your Total Payment is <p class="alert alert-success"><small>${currency}</small> ${paid3}</p>`
//  total.innerHTML = ` Your Total Payment is <p class="alert alert-success"><small>${currency}</small> ${paid6}</p>`
//  total.innerHTML = ` Your Total Payment is <p class="alert alert-success"><small>${currency}</small> ${paid12}</p>`

//clear the list when ever there is a new input so it will not store anaything in the list html tag (keep the html empty)
clearList([threeEntry, sixEntry, twelveEntry])

 //show entry
 ENTRY_LIST.forEach((entry) => {
    if(entry.type == "pay3"){
        showEntry(threeEntry, entry.amount )
    }
    else if(entry.type == "pay6"){
        showEntry(sixEntry, entry.amount )
    }
    else if(entry.type == "pay12"){
        showEntry(twelveEntry, entry.amount )
    }
 })

}

//calculate balance fucntion
const calculateTotal = (type, list) => {
    let sum = 0
    list.forEach(entry => {
        if(entry.type == type){
            sum += entry.amount
        }
    })
    return sum
}

const  clearList = (elements) => {
    elements.forEach( element => {
        element.innerHTML = "";
    })
}

const showEntry = (list, amount) => {
    const entry = `<li>
                        <div><small>RP</small>${amount}</div>
                    </li>`
    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}