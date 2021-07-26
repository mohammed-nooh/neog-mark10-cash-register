"use strict";

const bill = document.querySelector("#billAmt");
const cash = document.querySelector("#cashAmt");

// console.log(`this is the balance${balance}`);

const message = document.querySelector(".message");
const nextBtn = document.querySelector("#next");
const submit = document.querySelector("#submit");


function nextfn(){
    const billAmt = Number(bill.value);

    if(billAmt<0){
        
    }
}




console.log("hi");










function clickHandler() {
    const cashAmt = Number(cash.value);
    let balance = cashAmt - billAmt;
    // console.log(billAmt, cashAmt);
    // console.log(balance);
    if(balance===0){
        message.classList.remove("hidden");
        message.innerText="There is no Balance";
    }

};

submit.addEventListener("click", clickHandler);