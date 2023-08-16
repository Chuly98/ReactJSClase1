import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
function Cart() {
const {cart, removeItem, clearCart, totalQuantity} = useContext(cartContext)


    if (totalQuantity() === 0){
        return(
            <div>
                <p>El Carrito Esta Vacio!</p>
                <Link to="/">Volver Al Inicio</Link>
            </div>
        )
    }



  return (
    <div>
      <h1>Tu Compras!</h1>
      {
        cart.map (item =>(
            <div>
                <h2>{item.title}</h2>
                <img width={200} src={item.img} alt="Imagen" />
                <p>Precio Unitario ${item.price}</p>
                <p>Cantidad a Comprar: {item.count}</p>
                <p>Precio Total: {item.count * item.price}</p>
                <button onClick={() => removeItem (item.id)}>Eliminar</button>
                <Link to="/checkout"><button>Comprar</button></Link>
                <button onClick={() => clearCart ()}>Vaciar Carrito</button>
            </div>
        ))
      }

    </div>
  )
  }


export default Cart