"use strict";

const bill = document.querySelector("#billAmt");
const cash = document.querySelector("#cashAmt");

// console.log(`this is the balance${balance}`);

const message = document.querySelector(".message");
const nextBtn = document.querySelector(".nextBtn");
const submit = document.querySelector(".subBtn");

function showError(text){
    message.classList.remove("hidden");
    message.innerText=text;
}


function nextfn(){
    const billAmt = Number(bill.value);

    if(billAmt<1){
        showError("Enter valid Bill");
    }
    else{
        message.classList.add("hidden");
        nextBtn.style.display="none";
        cash.classList.remove("hidden");
    }
}

nextBtn.addEventListener("click",nextfn);


console.log("hi");

function clickHandler() {
    // const billAmt = Number(bill.value);
    const cashAmt = Number(cash.value);
    let balance = cashAmt - billAmt;
    // console.log(billAmt, cashAmt);
    // console.log(balance);
    if(balance===0){
        showError("No balance");
    }

};

submit.addEventListener("click", clickHandler);