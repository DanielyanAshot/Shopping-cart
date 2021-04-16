import {CartItem} from "./CartItem"

export function CartItemList (props) {
    
    return (
        <div className = "CartItemList">
          {props.data.items.map((item, index) => <CartItem item = {item} key = {index}/>)}
        </div>
    );
}

