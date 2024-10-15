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
        let response = await axios.get(`${BASE_API_URL}/time_series?apikey=${API_KEY}&interval=${INTERVAL}&symbol=${SYMBOL}&start_date=${formattedStartDate}&end_date=${formattedEndDate}&format=${FORMAT}`)
        let eurUsd = response.data.values;
        

        function renderTasks() {

            let resultHTML = '<h2>EUR/USD Exchange Data</h2><ul>';
            // Use 'for...of' loop to go through the data
            for (let i = 0; i < eurUsd.length; i++) {
                let { datetime, open, high, low, close } = eurUsd[i];
                resultHTML += `<li>DateTime: ${datetime} | Open: ${open} | High: ${high} | Low: ${low} | Close: ${close}</li>`;
            }

            resultHTML += '</ul>';

            // Display the generated result in the #result div
            document.querySelector("#result").innerHTML = resultHTML;
        }

        // Call the function to render the data
        renderTasks();

    });

});


