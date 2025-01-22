# Currency Converter

## Overview
This project is a currency converter application that allows users to convert an amount from one currency to another using live exchange rates. The app uses the [FreeCurrencyAPI](https://freecurrencyapi.com/) to fetch real-time exchange rates.

## Features
- Convert between multiple currencies.
- Automatically selects default currencies (`USD` to `INR`).
- Displays the equivalent amount in the target currency.
- Dynamically updates country flags based on selected currencies.

## Project Structure
```
project/
|-- index.html        # HTML file for the user interface
|-- style.css         # CSS file for styling the app
|-- code.js           # JavaScript file for logic and functionality
|-- README.md         # Documentation
```

### Main Files
1. **`index.html`**: Contains the structure of the currency converter interface.
2. **`style.css`**: Styles the interface, dropdowns, and buttons.
3. **`code.js`**: Implements the currency conversion logic and API calls.
4. **`README.md`**: Project documentation.

## Setup Instructions

### Prerequisites
- A modern web browser.
- Internet connection for fetching live exchange rates.

### Installation
1. Clone or download the repository.
2. Open the `index.html` file in a browser to run the application.

### API Configuration
The app uses the [FreeCurrencyAPI](https://freecurrencyapi.com/) for exchange rates. Replace the placeholder API key in `code.js` with your API key:
```javascript
const Base_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY";
```

### Usage
1. Open the app in a browser.
2. Select the source currency (default is USD).
3. Select the target currency (default is INR).
4. Enter the amount to convert.
5. Click the "Convert" button to see the converted value.

## JavaScript Code Highlights

### Dropdown Initialization
Dynamically populates the dropdowns with currency codes and sets default selections:
```javascript
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}
```

### Fetching Exchange Rates
Fetches live exchange rates from the API and calculates the converted amount:
```javascript
button.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let response = await fetch(Base_URL);
    let data = await response.json();
    let fromRate = data.data[from.value];
    let toRate = data.data[to.value];
    let finalAmount = amountvalue * toRate;

    let output = document.querySelector(".msg");
    output.innerText = `${amountvalue} ${from.value} = ${finalAmount} ${to.value}`;
});
```

### Flag Updates
Updates the country flag based on the selected currency:
```javascript
const updateflag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};
```

## Dependencies
- [FreeCurrencyAPI](https://freecurrencyapi.com/): For fetching live exchange rates.
- [FlagsAPI](https://flagsapi.com/): For displaying country flags.

##Contributing
Contributions are welcome! Fork this repository, make improvements, and submit a pull request.

## Steps for contributing:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add feature').
5. Push your changes to your forked repository (git push origin feature-name).
6. Open a pull request.
