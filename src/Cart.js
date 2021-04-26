import {useState, useEffect, useCallback} from "react";
import {CartHeader} from "./CartHeader";
import {CartItemList} from "./CartItemList";
import {CartFooter} from "./CartFooter";
import "./style/Cart.css"


export function Cart() {
  
  const [data, setData] = useState();
  const [subtotal, setSubtotal] = useState(0);
  
  const subtotalCalculator = useCallback (newData =>{
    return newData.reduce(function(aggr, item){
      return aggr + item.price.slice(1) * item.quantity;
    }, 0);
  }, []);

  
  const removeItem = useCallback(id => {
    setData(() => {
      const newData = data.filter(item => item.id !== id);
      setSubtotal(subtotalCalculator(newData));
      return newData;
    });
  }, [data, subtotalCalculator]);

  
  const onQuantityChange = useCallback((quantity, id) => {
    const newData = data.map((item) => {
      if(item.id === id){
        return {...item, quantity};
      }
      return item;
    }, [data])
    setData([...newData]);
    setSubtotal(subtotalCalculator(newData));
   }, [data, subtotalCalculator]);

   
   useEffect(() => {fetch("MOCK_DATA.json").then((response) => response.json()).then((response) => {
    setTimeout(() =>{
      setData(response);
      setSubtotal(subtotalCalculator(response));
    }, 5000)}
    )}, [subtotalCalculator]);

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