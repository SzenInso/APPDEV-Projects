import React, { useState } from "react";
import './Grocery.css';

export default function Grocery(props) {
  const shopItems = props.items;
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState("");
  const [receipt, setReceipt] = useState(null);

  function AddItem(item) {
    setCart(c => [...c, item]);
  }

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }


  function renderItems() {
    return shopItems.map((item) => (
      <div className="item-card" key={item.id}>
        <h5>{item.name}</h5>
        <p>Price per piece: ${item.price}</p>
        <button onClick={() => AddItem(item)}>Add to Cart!</button>
      </div>
    ));
  }

  function renderCart() {
    return cart.map((item, index) => (
      <div className="cart-item" key={index}>
        <h5>{item.name}</h5>
        <p>Price per piece: ${item.price}</p>
      </div>
    ));
  }

  function handlePayment() {
    const paidAmount = parseFloat(payment);
    if (isNaN(paidAmount) || paidAmount < totalPrice) {
      alert("Invalid payment amount. Please enter a value more than or equal the price.");
      return;
    }
    const change = paidAmount - totalPrice;
    setReceipt({
      items: cart,
      total: totalPrice,
      paid: paidAmount,
      change: change,
    });
    setCart([]); 
    setPayment(""); 
  }

  function renderReceipt() {
    if (!receipt) return null;

    return (
      <div className="receipt">
        <h4>Receipt</h4>
        <div className="receipt-items">
          {receipt.items.map((item, index) => (
            <p key={index}>{item.name} - ${item.price}</p>
          ))}
        </div>
        <p><strong>Total Price: </strong>${receipt.total.toFixed(2)}</p>
        <p><strong>Amount Paid: </strong>${receipt.paid.toFixed(2)}</p>
        <p><strong>Change: </strong>${receipt.change.toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div>
      <h4>This is the Shop:</h4>
      <div className="shop-items-container">{renderItems()}</div>

      <h4>Cart Items:</h4>
      {cart.length > 0 ? (
        <div>
          <div className="cart-items-container">{renderCart()}</div>
          <h5>Total Price: ${totalPrice.toFixed(2)}</h5>

          <div className="payment-section">
            <label htmlFor="payment">Enter Payment Amount: </label>
            <input
              type="number"
              id="payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              min={totalPrice}
              step="0.01"
            />
            <button className="payment-button" onClick={handlePayment}>Submit Payment</button>
          </div>
        </div>
      ) : (
        <p>There are no items in the cart!</p>
      )}

      {renderReceipt()}
    </div>
  );
}
