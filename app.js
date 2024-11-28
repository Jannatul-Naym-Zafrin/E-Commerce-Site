// JavaScript for adding items to the shopping cart
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const id = product.dataset.id;
            const name = product.querySelector('h3').textContent;
            const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));

            // Add item to cart
            cartItems.push({ id, name, price });

            // Update cart UI
            updateCartUI();
        });
    });

    function updateCartUI() {
        cartList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }
});
