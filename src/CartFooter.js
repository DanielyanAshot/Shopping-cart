import "./style/CartFooter.css"

export function CartFooter (props) {
        
    return (
        <div className = "CartFooter">
            <span className = "subtotal">Subtotal</span>
            <span className = "totalValue">{"$" + props.data.subtotal().toLocaleString()}</span>
            <button className = "checkout">Checkout</button>
        </div>
    );
}