window.addEventListener("DOMContentLoaded", async function(){


    
        // Make the API request using Axios
        let response = await axios.get(`https://api.currencylayer.com/live?access_key=ec030841ae2256405ff1823b1e4b43c4&currencies=AUD,EUR,GBP,JPY,CAD`)
            let exchangeRates = response.data.quotes;
            
            
            let resultHTML = '<h2>Exchange Rates</h2><ul>';
            console.log(exchangeRates)
            // Loop through the relevant currencies and append only those to resultHTML
           for (const [currency, rate] of Object.entries(exchangeRates))
                
            {
                resultHTML += `<li>${currency}: ${rate}</li>`;
            }

            resultHTML += '</ul>';

            // Display the generated result in the #result div
            document.querySelector("#result").innerHTML = resultHTML;
    
});
     

