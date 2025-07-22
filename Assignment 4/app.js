const Input = document.getElementById("number");
const error = document.getElementById("error");
const result = document.getElementById("result");


Input.addEventListener("input", (e) => {
    if (Input.value <= 0 || isNaN(Input.value)) {
        error.innerText = "Please enter a valid number!!"
        setTimeout(() => {
            error.innerText = "";
            Input.value = "";
        }, 2000);
    }else{
        result.innerText=(Input.value/2.205).toFixed(5);
        setTimeout(() => {
            result.innerText = "";
            Input.value = "";
        }, 2000);
    }
})                               