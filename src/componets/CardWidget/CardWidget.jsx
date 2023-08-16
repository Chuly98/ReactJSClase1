import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CardWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";



function CardWidget() {
const context = useContext(cartContext);
  return (
    <Link to="/cart">
      <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        <p className="quantityBubble"> {context.getTotalItemsInCart()} </p>
      </div>
    </Link>
  )
}

export default CardWidget