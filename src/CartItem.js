import "./style/CartItem.css";

export function CartItem (props) {
    
    
    return (
        <div className = "CartItem">
          <div>
            <img src = {props.item.image} className = "Image" alt = {props.item.name}></img>
          </div>
                   
          <div>
           <span className = "productName">{props.item.name}</span>
           <p className = "productColor">{props.item.color}</p>
           <select className = "productQuantity" defaultValue = {props.item.quantity}>
             <option value = "1">1</option>
             <option value = "2">2</option>
             <option value = "3">3</option>
             <option value = "4">4</option>
             <option value = "5">5</option>
             <option value = "6">6</option>
             <option value = "7">7</option>
             <option value = "8">8</option>
             <option value = "9">9</option>
             <option value = "10">10</option>
           </select>
           <p className = "productPrice">{"Unit price $" + props.item.price.toLocaleString()}</p>
           <p className = "totalPrice">{props.item.quantity === 1 ? "": "Total price $" + (props.item.price * props.item.quantity).toLocaleString()}</p>
          </div>
        </div>
    );
}