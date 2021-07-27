"use strict";

const bill = document.querySelector("#billAmt");
const cash = document.querySelector("#cashAmt");

// console.log(`this is the balance${balance}`);
const denominations=document.querySelectorAll(".noNotes");
const message = document.querySelector(".message");
const nextBtn = document.querySelector(".nextBtn");
const submit = document.querySelector(".subBtn");
const arrayNotes = [2000, 500, 100, 20, 10, 5, 1];
const tableElement=document.querySelector(".table")

function compare(reminder,noteAmt,i){

    if(reminder>=noteAmt){
        let noofNotes=Math.floor(reminder/noteAmt);
        reminder=reminder-(noofNotes*noteAmt);
        denominations[i].innerText=`${noofNotes}`;
    }
    return reminder;
}

function clearNotes(){
    for(let notes of denominations){
        notes.innerText="";
    }
}

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
        submit.classList.remove("hidden");
    }
}

nextBtn.addEventListener("click",nextfn);


console.log("hi");

function submitHandler() {
    const billAmt = Number(bill.value);
    const cashAmt = Number(cash.value);
    let balance = cashAmt - billAmt;
    // console.log(billAmt, cashAmt);
    // console.log(balance);

    if(cashAmt<1){
        showError("enter valid cash amount");
        tableElement.classList.add("hidden");

    }
    else{
        if(balance===0){
            showError("No balance to be returned");
            tableElement.classList.add("hidden");

        }
        else if(balance<0){
            showError("Sorry pay more cash");
            tableElement.classList.add("hidden");

        }
        else{
            tableElement.classList.remove("hidden");
            message.classList.add("hidden");
            clearNotes();
            for(let i=0;i<arrayNotes.length;i++){
                balance=compare(balance,arrayNotes[i],i);
            }
    
        }
    }



    

};

submit.addEventListener("click", submitHandler);

