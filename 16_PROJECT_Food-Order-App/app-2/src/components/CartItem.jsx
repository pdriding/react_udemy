export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <>
      <p>
        {item.name} - {item.quantity} x ${item.price}
      </p>
      <div className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </>
  );
}
