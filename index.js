// Write your solution in this file!



window.customerName = 'bob';

const leastFavoriteCustomer = 'someone'
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}


function setBestCustomer() {
    window.bestCustomer='not bob'
}

function overwriteBestCustomer(newBestCustomer){
    window.bestCustomer=newBestCustomer
}

function changeLeastFavoriteCustomer() {
    
    leastFavoriteCustomer = 'maybe someone else';
}