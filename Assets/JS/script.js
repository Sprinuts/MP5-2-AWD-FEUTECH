document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.purchase-btn').forEach(button => {
        button.addEventListener('click', function () {
            const modal = bootstrap.Modal.getInstance(button.closest('.modal')); 
            modal.hide(); 
        });
    });

    var purchaseButton1 = document.getElementById('purchaseButton1');
    purchaseButton1.addEventListener('click', handlePurchase1);
    var purchaseButton2 = document.getElementById('purchaseButton2');
    purchaseButton2.addEventListener('click', handlePurchase2);
    var purchaseButton3 = document.getElementById('purchaseButton3');
    purchaseButton3.addEventListener('click', handlePurchase3);
    var purchaseButton4 = document.getElementById('purchaseButton3');
    purchaseButton4.addEventListener('click', handlePurchase4);
});

function handlePurchase1() {
    alert('Thank you for your purchase!');
    var modal = document.getElementById('product1-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}

function handlePurchase2() {

    alert('Thank you for your purchase!');
    var modal = document.getElementById('product2-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}
function handlePurchase3() {
    alert('Thank you for your purchase!');
    var modal = document.getElementById('product3-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}
function handlePurchase4() {
    alert('Thank you for your purchase!');
    var modal = document.getElementById('product4-details-modal');
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.show();
}