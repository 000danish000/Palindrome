let textInput = document.getElementById("text-input");
let chkButton = document.getElementById("check-btn");
let result = document.getElementById("result");
let reset = document.getElementById("reset");


chkButton.addEventListener("click",() => {
    let removeSpace = textInput.value.toLowerCase().replace(/\s/g, '');
    let str = removeSpace.replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr = str.split("").reverse().join("");

    if (textInput.value === "") {
        alert("Please input a value");
    }
    else if(str === reverseStr){
        result.textContent = `${textInput.value} is palindrome.`;
    }
    else{
        result.textContent = `${textInput.value} is not palindrome.`;
    }

});

reset.addEventListener("click",()=>{
    textInput.value="";
    result.textContent = "";
});
