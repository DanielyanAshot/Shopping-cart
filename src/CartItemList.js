import {CartItem} from "./CartItem";

import "./style/CartItemList.css";

export function CartItemList ({data, onQuantityChange,removeItem}) {
    
  if(data[0]){  
    return (
        <div className = "CartItemList">
          {data.map((item) => <CartItem item = {item} key = {item.id} onQuantityChange = {onQuantityChange} removeItem = {removeItem}/>)}
        </div>
    )};
  
  
  return <div className = "emptyCart">The cart is empty</div>  
}

