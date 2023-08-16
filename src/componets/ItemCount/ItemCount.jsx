import { useState } from "react";

function ItemCount({ stock, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    function handleClickSuma() {
        if (quantity === stock) {
        }
        else {
            setQuantity(quantity + 1);
        }
    }

    function handleClickResta() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='counter'>
            <div className='addSubContainer'>
                <div className="subButton">
                    <button onClick={handleClickResta}>
                        <h5>-</h5>
                    </button>
                </div>
                <div className='stockDisplay'>
                    <h5>{quantity}</h5>
                </div>
                <div className="addButton">
                    <button onClick={handleClickSuma}>
                        <h5>+</h5>
                    </button>
                </div>
            </div>
            <button onClick={() => onAddToCart (quantity)} className='addToCartButton'>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;