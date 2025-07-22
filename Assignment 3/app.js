const billamount = document.querySelector("#billamount");
const tippercentage = document.querySelector("#tippercentage");
const calculate = document.querySelector("#calculate-btn");
const result = document.querySelector("#total-bill");

calculate.addEventListener("click", (e) => {
    if (billamount.value === "" || tippercentage.value === "") {
        alert("please enter the values");
        return;
    } else if (billamount.value < 0 || tippercentage.value < 0) {
        alert("please enter positive values");
        return;
    }else{
        const billamountvalue=parseFloat(billamount.value);
        const tippercentagevalue=parseFloat(tippercentage.value);
        const tipamount=billamountvalue*(tippercentagevalue/100);
        const totalbill=billamountvalue+tipamount;
        result.innerText=totalbill;
    }

})

