import { createContext, useState } from "react";

const cartContext = createContext( {cart:[]});

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart (products, count){
    const newCart = [...cart];
    const newItemInCart = {count, ...products};
    newCart.push(newItemInCart);
    setCart(newCart);
  }

  function removeItem (id){
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  }

  const totalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalItemsInCart(){
    let total = 0;
    cart.forEach((item)=>{
      total += item.count;
    });
    return total;
  }

  function getTotalPriceInCart(){
    let total = 0;
    cart.forEach((item)=>{
      total += item.count *item.price;
    });
    return total;
  }


  return (
    <cartContext.Provider value={{cart, addToCart, removeItem, clearCart, getTotalItemsInCart, totalQuantity, getTotalPriceInCart}}>
      {props.children}
    </cartContext.Provider>
  )
}

export {cartContext, CartContextProvider}