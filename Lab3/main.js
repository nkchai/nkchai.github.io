const bill_total = document.getElementById("Bill total");
const errmessagebt = document.getElementById("errormessagebt");
const tip_slider = document.getElementById('tipslider');
const tip_per_input = document.getElementById('tippercentinput');
const errmessageslider = document.getElementById('errormessageslider');
const tipamount = document.getElementById("converted tip amount");
const total_final = document.getElementById("Converted Total Bill with Tip");
const currency = document.getElementById("Currency");
const symbol = document.getElementById("symbol");
const symbol1 = document.getElementById("symbol1");
errmessageslider.style.display = 'none';
tip_slider.disabled = true;
errmessagebt.style.display = 'none';
let camount = 1;
let bill1 = 0;
currency.disabled = true;

bill_total.addEventListener('input', function () {

    const bill = parseFloat(bill_total.value);
    console.log(bill);
    errmessagebt.style.display = 'none';
    if (bill > 0 && !isNaN(bill) ) {
        errmessagebt.style.display = 'none'
        tip_slider.disabled = false;
        currency.disabled = false;
        tip_per_input.value = tip_slider.value;
        convertbill(bill);
        tip_slider.addEventListener('input', function () {
            errmessageslider.style.display = 'none';
            tip_per_input.value = tip_slider.value;
            convertbill(bill);
        })

        // tip_per_input.addEventListener('input', function () {
        //     errmessageslider.style.display = 'none';
        //     let value = parseInt(tip_per_input.value, 10);

        //     if (value < 0) {
        //         value = 0;
        //         errmessageslider.textContent = "Number must be positive";
        //         errmessageslider.style.display = 'inline'
        //     }
        //     if (value > 100) {
        //         value = 100;
        //         errmessageslider.textContent = "Number must be less than 100";
        //         errmessageslider.style.display = 'inline'
        //     }
        //     tip_slider.value = value;
        //     // tipamount.innerHTML = value
        //     // convertbill(bill);


        // });
        currency.addEventListener('input', function () {
            if (currency.value === "USD") {
                camount = 1;
                symbol.textContent = '$';
                symbol1.textContent = '$';
                convertbill(bill);
            }
            else if (currency.value === "INR") {
                camount = 84.07;
                symbol.textContent = '₹';
                symbol1.textContent = '₹';
                convertbill(bill);
            }
            else if (currency.value === "YEN") {
                camount = 149.34;
                symbol.textContent = '¥';
                symbol1.textContent = '¥';
                convertbill(bill);
            }

        })

    }
    else  {
        // if (bill_total.value==="") errmessagebt.style.display = 'none';
        // else 
        errmessagebt.textContent = "Input must be a positive number";
        errmessagebt.style.display = 'inline'
        tip_slider.disabled = true;
        tip_per_input.disabled = true;
        total_final.value = "";
        tipamount.value = "";
        tip_slider.value = 0;
        tip_per_input.value = 0;
        currency.disabled = true;
        // convertbill(bill);
    }

    function convertbill(bill) {

        bill1 = bill * camount;
        const tip_percent = parseFloat(tip_slider.value, 10);
        const tipAmount = (bill1 * (tip_percent / 100)).toFixed(2); // Calculate tip amount
        tipamount.value = tipAmount; // Update the displayed converted tip amount
        total_final.value = (parseFloat(bill1) + parseFloat(tipAmount)).toFixed(2);

    }
});


