import "./style/CartHeader.css"

export function CartHeader () {
    return (
        <div className="CartHeader">
          <span className = "cart">Your Cart</span>
          <button className = "close">X</button>
        </div>
      );
}