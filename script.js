



const monthly_input = document.querySelector('#monthly-input');
    const monthly_range = document.querySelector('#monthly-range');
    const intrest_input = document.querySelector('#intrest-input');
    const intrest_range = document.querySelector('#intrest-range');
    const year_input = document.querySelector('#year-input');
    const year_range = document.querySelector('#year-range');
    const investedAmount = document.querySelector('#invested-amount');
    const estReturns = document.querySelector('#est-returns');
    const totalValue = document.querySelector('#total-value');

    // Function to format numbers in Indian currency format and remove decimals
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount.toFixed(0)); // Remove decimals using .toFixed(0)
    }

    // Function to update the summary
    function updateSummary() {
        const monthlyInvestment = parseFloat(monthly_input.value);
        const interestRate = parseFloat(intrest_input.value) / 100; // Convert percentage to decimal
        const years = parseFloat(year_input.value);
        const months = years * 12;
        const monthlyRate = interestRate / 12;

        // SIP Calculation (Compound Interest Formula)
        const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        const totalInvested = monthlyInvestment * months;
        const estimatedReturns = futureValue - totalInvested;

        // Update the summary with formatted values
        investedAmount.textContent = formatCurrency(totalInvested);
        estReturns.textContent = formatCurrency(estimatedReturns);
        totalValue.textContent = formatCurrency(futureValue);
    }

    // Event listeners to update range and input field values
    monthly_input.addEventListener("input", function () {
        monthly_range.value = monthly_input.value;
        updateSummary();
    });

    monthly_range.addEventListener("input", function () {
        monthly_input.value = monthly_range.value;
        updateSummary();
    });

    intrest_input.addEventListener("input", function () {
        intrest_range.value = intrest_input.value;
        updateSummary();
    });

    intrest_range.addEventListener("input", function () {
        intrest_input.value = intrest_range.value;
        updateSummary();
    });

    year_input.addEventListener("input", function () {
        year_range.value = year_input.value;
        updateSummary();
    });

    year_range.addEventListener("input", function () {
        year_input.value = year_range.value;
        updateSummary();
    });



    
    
    // Initialize the summary with initial values
    updateSummary();
    


    let nav = document.querySelector('#new1');

    function changeback(){
        if(document.body.style.backgroundColor == "rgb(10, 129, 208)"){
           
           
             document.querySelector('.left').style.backgroundColor = "rgb(56,56,56)"
             document.querySelector('.right').style.backgroundColor = "rgb(56,56,56)"
             document.querySelector('#labal-1').style.color = "#fff"
             document.querySelector('#labal-2').style.color = "#fff"
             document.querySelector('#labal-3').style.color = "#fff"


             document.querySelector('#monthly-input').style.backgroundColor = "rgb(72,72,72)"
             document.querySelector('#monthly-input').style.color = "white"
             document.querySelector('#monthly-input').style.border = "3px solid lightgray"


             document.querySelector('#intrest-input').style.backgroundColor = "rgb(72,72,72)"
             document.querySelector('#intrest-input').style.color = "white"
             document.querySelector('#intrest-input').style.border = "3px solid lightgray"


             document.querySelector('#year-input').style.backgroundColor = "rgb(72,72,72)"
             document.querySelector('#year-input').style.color = "white"
             document.querySelector('#year-input').style.border = "3px solid lightgray"


              document.querySelector('#monthly-amount-tag').style.color = "white"
              document.querySelector('#invested-amount').style.color = "white"


              document.querySelector('#est-returns-tag').style.color = "white"
              document.querySelector('#est-returns').style.color = "white"


              document.querySelector('#total-value-tag').style.color = "white"
              document.querySelector('#total-value').style.color = "white"

              document.querySelector('#summary').style.color = "white"

              document.querySelector('#heading').style.color = "white"







             

            document.body.style.backgroundColor ="black";
            document.querySelector('.iconmoon').src= "icons/icons8-sun.svg"; 
            
        }else{
            document.body.style.backgroundColor = "rgb(10, 129, 208)";
            document.querySelector('.iconmoon').src= "icons/moon-dark-theme-svgrepo-com.svg"; 

            document.querySelector('.left').style.backgroundColor = "white"
            document.querySelector('.right').style.backgroundColor = "white"

            document.querySelector('#labal-1').style.color = "rgb(64, 63, 63)"

            document.querySelector('#labal-2').style.color = "rgb(64, 63, 63)"
             document.querySelector('#labal-3').style.color = "rgb(64, 63, 63)"

             document.querySelector('#monthly-input').style.backgroundColor = "white"
             document.querySelector('#monthly-input').style.color = "rgb(62, 62, 62)"
             document.querySelector('#monthly-input').style.border = "3px solid rgb(62, 62, 62) "

             document.querySelector('#intrest-input').style.backgroundColor = "white"
             document.querySelector('#intrest-input').style.color = "rgb(62, 62, 62)"
             document.querySelector('#intrest-input').style.border = "3px solid rgb(62, 62, 62) "


             document.querySelector('#year-input').style.backgroundColor = "white"
             document.querySelector('#year-input').style.color = "rgb(62, 62, 62)"
             document.querySelector('#year-input').style.border = "3px solid rgb(62, 62, 62)"


             document.querySelector('#monthly-amount-tag').style.color = "black"
              document.querySelector('#invested-amount').style.color = "black"

              document.querySelector('#est-returns-tag').style.color = "black"
              document.querySelector('#est-returns').style.color = "black"

              document.querySelector('#total-value-tag').style.color = "black"
              document.querySelector('#total-value').style.color = "black"

               document.querySelector('#summary').style.color = "black"

               document.querySelector('#heading').style.color = "rgb(10, 129, 208)"


            

        }
    }
    
    
    