const Base_URL="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_F8Fcta4Q4SXLBpJtDxLgDJUIxdah0KaDdb9bkLY3";

// const API_KEY = "ceb27779503a31998cbea1e5"; 
// const Base_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const dropdowns = document.querySelectorAll(".dropdown select");

const button = document.querySelector("form button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}


const updateflag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}

button.addEventListener("click",async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let amountvalue = amount.value;

    if(amountvalue === "" || amountvalue < 1){
        amountvalue = 1;
        amount.value = "1";
    }
    
        let response = await fetch(Base_URL);
        let data = await response.json();
        let fromRate = data.data[from.value];
        let toRate = data.data[to.value];
        let finalAmount = amountvalue * toRate;

        let output = document.querySelector(".msg");
        output.innerText = `${amountvalue} ${from.value} = ${finalAmount} ${to.value}`;
})
