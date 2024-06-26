document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.total-price');

    cartItems.forEach(item => {
        const plusBtn = item.querySelector('.plus');
        const minusBtn = item.querySelector('.minus');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-button');
        const quantityElement = item.querySelector('.quantity');
        const priceElement = item.querySelector('.price');
        const itemPrice = parseFloat(item.getAttribute('data-price'));

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updatePrice();
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updatePrice();
            }
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            updatePrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });

        function updatePrice() {
            const quantity = parseInt(quantityElement.textContent);
            const newPrice = itemPrice * quantity;
            priceElement.textContent = `$${newPrice.toFixed(2)}`;
            updateTotalPrice();
        }
    });

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            total += price;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    updateTotalPrice();
});