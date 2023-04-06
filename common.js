function getTextElementValueById(elementId){
    PhoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = PhoneTotalElement.innerText;
    const currentTotalPrice = parseInt(currentPhoneTotalString);
    return currentTotalPrice;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // phone total price
    const currentPhoneTotal = getTextElementValueById('phone-total-price');
    const currentCaseTotal = getTextElementValueById('case-total-price');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseInt(taxAmountString);
    console.log(taxAmount);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}