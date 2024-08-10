const base_URl= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdownSelect = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")




// for (let select of dropdownSelect){
//     for (code in countryList){
//         console.log(code, countryList[code])
//     }

// }

for (let select of dropdownSelect){
    for (currcode in countryList){
        let newOption = document.createElement("option")
        newOption.innerText = currcode
        newOption.value = currcode
        if(select.name === "from" && currcode === "USD"){
            newOption.selected = "selected"
        }else if(select.name === "To" && currcode === "PKR"){
            newOption.selected = "selected"
        }
        select.append(newOption)
    }

    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target)
    })

} 


const updateFlag = (element)=>{
    let currcode = element.value
    let countryCode = countryList[currcode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc
   
}

const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1"
    }

    // console.log(fromCurr.value ,toCurr.value)

    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`; 
    let response = await fetch(url)
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()]

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}


btn.addEventListener("click",async(evt)=>{
    evt.preventDefault()
    // let amount = document.querySelector(".amount input")
    // let amtVal = amount.value
    // if(amtVal === "" || amtVal < 1){
    //     amtVal = 1;
    //     amount.value = "1"
    // }

    // // console.log(fromCurr.value ,toCurr.value)

    // const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`; 
    // let response = await fetch(url)
    // let data = await response.json();
    // let rate = data[toCurr.value.toLowerCase()]

    // let finalAmount = amtVal * rate;
    // msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

})


window.addEventListener("load",()=>{
    updateExchangeRate();

})



