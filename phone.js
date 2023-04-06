
function updatePhoneQuantity(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneQuantity = parseInt(phoneNumberString)

    let newPhoneQuantity;
    if(isIncrease === true){
        newPhoneQuantity = previousPhoneQuantity + 1;
    }else{
        newPhoneQuantity = previousPhoneQuantity - 1;
    }

    phoneNumberField.value = newPhoneQuantity;
    return newPhoneQuantity;
}

function updatePhoneTotalPrice (newPhoneQuantity){
    const phoneTotalPrice = newPhoneQuantity * 1219;
    const PhoneTotalElement = document.getElementById('phone-total-price');
    PhoneTotalElement.innerText = phoneTotalPrice;
}

// function getTextElementValueById(elementId){
//     PhoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = PhoneTotalElement.innerText;
//     const currentTotalPrice = parseInt(currentPhoneTotalString);
//     return currentTotalPrice;
// }

// function calculateSubTotal(){
//     // phone total price
//     const currentPhoneTotal = getTextElementValueById('phone-total-price');
//     const currentCaseTotal = getTextElementValueById('case-total-price');
    
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     const subTotalElement = document.getElementById('sub-total');
//     subTotalElement.innerText = currentSubTotal;
// }

// for plus
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneQuantity = updatePhoneQuantity(true);

    updatePhoneTotalPrice(newPhoneQuantity);
    calculateSubTotal();
    


});

// for minus
document.getElementById('btn-phone-minus').addEventListener('click', function (){
    const newPhoneQuantity = updatePhoneQuantity(false);

    updatePhoneTotalPrice(newPhoneQuantity);
    calculateSubTotal();
});