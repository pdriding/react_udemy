export default function CartItem({ item }) {
  return (
    <>
      <p>
        {item.name} - {item.quantity} x ${item.price}
      </p>
      <div className="cart-item-actions">
        <button>-</button>
        <span>{item.quantity}</span>
        <button>+</button>
      </div>
    </>
  );
}
