import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


function ItemDetail (props) {
    const { products} = props;
    const {addToCart} = useContext(cartContext)
    const [isAddedToCart, setIsAddedToCart] = useState(false);

function handleAddToCart(quantity){
    addToCart(products, quantity)
    alert(`Agregaste${quantity} unidades de ${products.title} al carrito`);
    setIsAddedToCart(true);
}

    return (
        <div className="cardInfo">
            <div>
                <img width={400} src={products.img} alt="imagen"></img>
            </div>
            <div className="cardInfoDetails">
                <div>
                    <h3 className="cardInfoTitle">{products.title}</h3>
                    <p className="cardInfoDesc">{products.description}</p>
                </div>
                <div>
                    <h5 className="cardInfoPrice">Precio:$ {products.price}</h5>
                </div>
                {
                    isAddedToCart? <Link to="/cart"><button>Ir al carrito</button></Link>: 
                    <ItemCount onAddToCart={handleAddToCart} stock={products.stock} />
                }
                 <Link to="/">
                    <button>Volver al Inicio</button>
                </Link>   
            </div>
        </div>
    )
}

export default ItemDetail;