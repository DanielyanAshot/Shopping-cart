import {useState} from "react";
import {CartHeader} from "./CartHeader";
import {CartItemList} from "./CartItemList";
import {CartFooter} from "./CartFooter";
import "./style/Cart.css"

/*   I used useState assuming that i might wanna change the data in the future  */

export function Cart() {
  
  const [data, setData] = useState({
    items: [{
      price: 100,
      image: "/Blendjet.png",
      quantity: 1,
      name: "Blendjet blender",
      color: "Black"
    },{
      price: 250,
      image: "/SKG.png",
      quantity: 2,
      name: "SKG blender",
      color: "Red"
    },{
      price: 500,
      image: "/Kuvings.png",
      quantity: 3,
      name: "Kuvings blender",
      color: "White"
    }],
    subtotal(){
      return this.items.reduce(function(aggr, item){
        return aggr + item.price * item.quantity;
        }, 0);
      }
      
    });

      
  return (
      <div className="Cart">
        <CartHeader />
        <CartItemList data = {data}/>
        <CartFooter data = {data}/>
      </div>
    );
}