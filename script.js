const url = "https://cat-fact.herokuapp.com/facts"
// const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"
const factPara= document.querySelector("#fact")
const button = document.querySelector("#btn")

// button.addEventListener("click",getfacts);

// let promise = fetch(url)
// console.log(promise)

//getRequest
//

const getfacts = async()=>{
    console.log("getting data......")
    let response = await fetch(url)
    console.log(response)//json format
    let data = await response.json()
    factPara.innerText = data[2].text
    // console.log(data[0].text)

}

// we did it with promise chain
// function getfacts2(){
//     fetch(url).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     })
// }
button.addEventListener("click",getfacts);
