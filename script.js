// Variable declarations
let totalPrice = 0;
let discountAmount = 0;

const olElement = document.getElementById('add-list');
const makePurchaseButton = document.getElementById('make-purchase-btn');

// Event listener for card clicks
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        let price = parseFloat(this.querySelector('span').innerText);
        let itemName = this.querySelector('p').innerText;

        // No need to check if item already selected, add it every time
        const liElement = document.createElement('li');  
        liElement.textContent = itemName;  
        olElement.appendChild(liElement);  

        totalPrice += price;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        document.getElementById('total-price-after-discount').innerText = (totalPrice - discountAmount).toFixed(2);
        makePurchaseButton.disabled = totalPrice <= 0;

        // Enable "Make Purchase" button when totalPrice > 0
        if (totalPrice > 0) {
            document.getElementById('make-purchase-btn').disabled = false;
        }

        // Enable "Apply" button when totalPrice > 200
        if (totalPrice > 200) {
            document.getElementById('coupon-btn').disabled = false;
        } else {
            document.getElementById('coupon-btn').disabled = true;
        }
    });
});

// Event listener for the coupon apply button
document.getElementById('coupon-btn').addEventListener('click', function() {
    let couponValue = document.getElementById('coupon-id').value;
    if (couponValue === "SELL200" && totalPrice > 200) {
        discountAmount = totalPrice * 0.2; 
        document.getElementById('discount-price').innerText = discountAmount.toFixed(2);
        document.getElementById('total-price-after-discount').innerText = (totalPrice - discountAmount).toFixed(2);
    }
});

// Initialize and event listener for modal
const my_modal_2 = document.getElementById('my_modal_2');
document.querySelector('#my_modal_2 button.btn').addEventListener('click', function() {
    location.reload();  
});

