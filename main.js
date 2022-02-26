const price = document.querySelector("#ps5Price")
const inputSalary = document.querySelector("#inputSalary")
const accomodation = document.querySelector("#accomodation")
const budget = document.querySelector("#budget")

//btn animation
const btnValue = document.querySelector("#setValue")
const btnValue2 = document.querySelector("#setValue2")

// Choose cicilan
const threeTimes = document.querySelector('#cicilan3x')
const sixTimes = document.querySelector('#cicilan6x')
const twelveTimes = document.querySelector('#cicilan12x')

//modal
const modal3 = document.querySelector('#modal3')




let ENTRY_LIST = []

const clearInput = () => {
    inputSalary.value = ""
}

const clearEntry = () => {
    ENTRY_LIST = []
}


//create trigger to store data input into ENTRY LIST
btnValue.addEventListener('click', () => {

    accomodation.innerText = `Your Accomodation budget is ${inputSalary.value / 2}`
    budget.innerText = `Your Total Budget for Menyicil is ${parseInt(inputSalary.value / 2 / 2)}`

    if(!inputSalary) return;

    //create object to store inputsalary value
    let income = {
        type : 'budget',
        amount : parseInt(inputSalary.value / 2 / 2),
    }
    //Push Budget into ENTRY_LIST to store the data budget
    ENTRY_LIST.push(income)

    clearInput()
    showHide(btnValue)
    
});


//create function that goes to the nextpage
const getPage3 = () => {
    ENTRY_LIST.map(entry => {
        if(entry.amount >= 2900000){
            return location.href="./payment.html"
        }else {
            window.alert("no budget try 6 try 12 cicilan")
        }
    })
}

const getPage6 = () => {
    ENTRY_LIST.map(entry => {
        if(entry.amount >= 1450000){
            return location.href="./payment.html"
        }else {
            window.alert("no budget try 12 cicilan")
        }
    })
}

const getPage12 = () => {
    ENTRY_LIST.map(entry => {
        if(entry.amount >= 725000){
            return location.href="./payment.html"
        }else {
            window.alert("no budget sorry")
        }
    })
}   


//trigger function that goes to the next page
threeTimes.addEventListener('click', () => {
   getPage3()
//    clearEntry()
})

sixTimes.addEventListener('click', () => {
    getPage6() 
    // clearEntry() 
})

twelveTimes.addEventListener('click', () => {
  getPage12()
//   clearEntry()
})

const showHide = (element) => {
    element.classList.add("hide")
    setTimeout(() => {
        element.classList.remove("hide")
    }, 1000)
}


//Play and unplay youtube

//tag id iframe youtube
const youtube = document.querySelector ("#youtubeVideo")

//triger button clos youtube
const closeModal = document.querySelector("#closeModal")
const closeModal2 = document.querySelector("#closeModal2")

//tentukan url youtube
const url = youtube.getAttribute("src") 

//buat fungsi 
const hideModal = () => {
    //kosongkan url youtube
    youtube.setAttribute("src", "")
    //isi lagi url youtube
    youtube.setAttribute("src", url)  
}
//trigger kosongkan dan isi kembali url youtube
closeModal.addEventListener("click", () => {
   hideModal()
})

closeModal2.addEventListener("click", () => {
   hideModal()
})