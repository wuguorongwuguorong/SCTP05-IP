window.addEventListener("DOMContentLoaded", async function () {
    let BASE_API_URL = 'https://api.twelvedata.com';
    let API_KEY = 'da7cc643495745a78c99c491e1d4d0a6';
    let FORMAT = 'JSON';

    document.querySelector("#search-button").addEventListener("click", async function () {
        let INTERVAL = document.querySelector("#timeinterval").value;
        let SYMBOL = document.querySelector("#search-pair").value;
        let START_DATE = document.querySelector("#startDate").value;
        let END_DATE = document.querySelector("#endDate").value;

        // Convert the date format to yyyy/mm/dd
        let formattedStartDate = START_DATE.replace(/-/g, '/'); // Replace '-' with '/' to get yyyy/mm/dd
        let formattedEndDate = END_DATE.replace(/-/g, '/'); // Replace '-' with '/' to get yyyy/mm/dd

        // Make the API request using Axios
        let response = await axios.get(`${BASE_API_URL}/time_series?apikey=${API_KEY}&interval=${INTERVAL}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&format=${FORMAT}&symbol=${SYMBOL}`)
        let allCurrencyUsd = response.data.values;
        

         // Function to render the data in the table
         function renderTasks() {
            let tbody = document.querySelector("#priceTable tbody");
            tbody.innerHTML = ""; // Clear any previous rows
            
            for (let i = 0; i < allCurrencyUsd.length; i++) {
                let { datetime, open, high, low, close } = allCurrencyUsd[i];

                // Create a new row
                let row = `<tr>
                            <td>${datetime}</td>
                            <td>${open}</td>
                            <td>${high}</td>
                            <td>${low}</td>
                            <td>${close}</td>
                           </tr>`;

                // Append the row to the table body
                tbody.innerHTML += row;
            }
        }
        // Call the function to render the data
        renderTasks();


    });

});


