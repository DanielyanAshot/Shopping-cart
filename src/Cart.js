import {useState, useEffect} from "react";
import {CartHeader} from "./CartHeader";
import {CartItemList} from "./CartItemList";
import {CartFooter} from "./CartFooter";
import "./style/Cart.css"


export function Cart() {
  const [data, setData] = useState();
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {fetch("MOCK_DATA.json").then((response) => response.json()).then((response) => {
    setTimeout(() =>{
    setData(response)
    setSubtotal(subtotalCalculator(response))
  }, 5000)})}, [])
  
  function removeItem (id){
    setData(() => {
      const newData = data.filter(item => item.id !== id);
      setSubtotal(subtotalCalculator(newData));
      return newData;
    });
  }

  function subtotalCalculator (newData){
    return newData.reduce(function(aggr, item){
      return aggr + item.price.slice(1) * item.quantity;
    }, 0);
  }
  
  const onQuantityChange = (quantity, id) => {
    const newData = data.map((item) => {
      if(item.id === id){
        return {...item, quantity}
      }
      return item;
    })
    setData([...newData]);
    setSubtotal(subtotalCalculator(newData));
   }

  if(data){
    return (
        <div className="Cart">
          <CartHeader />
          <CartItemList data = {data} onQuantityChange = {onQuantityChange} removeItem = {removeItem}/>
          <CartFooter subtotal = {subtotal}/>
        </div>
    )};
  
  return (
    <div className = "loadingScreen">
      <div className = "loader"></div>
      <span className = "loading">Loading ...</span>
    </div>
  )
}